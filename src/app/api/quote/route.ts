import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";

const recentRequests = new Map<string, number>();
const defaultRecipient = "harry@setapartplumbing.com.au";
const defaultFromEmail = "Set Apart Plumbing <onboarding@resend.dev>";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = quoteSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  if (result.data.website) {
    return NextResponse.json({ ok: true, message: "Thanks." });
  }

  const now = Date.now();
  const lastRequest = recentRequests.get(ip);

  if (lastRequest && now - lastRequest < 10_000) {
    return NextResponse.json(
      { ok: false, message: "Please wait a moment before submitting again." },
      { status: 429 },
    );
  }

  recentRequests.set(ip, now);

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.QUOTE_FROM_EMAIL || defaultFromEmail;
  const recipients = getRecipients(
    process.env.QUOTE_RECIPIENT_EMAILS || process.env.QUOTE_RECIPIENT_EMAIL,
  );

  if (!resendApiKey || recipients.length === 0) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "The quote form is validated, but email delivery is not configured yet. Please call 0422 131 659 or email harry@setapartplumbing.com.au.",
      },
      { status: 503 },
    );
  }

  const enquiry = result.data;
  const subject = `New Set Apart Plumbing enquiry from ${enquiry.name}`;
  const replyTo = enquiry.email || undefined;
  const emailBody = buildEmailBody(enquiry);

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: recipients,
        reply_to: replyTo,
        subject,
        text: emailBody.text,
        html: emailBody.html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend quote email failed:", errorText);

      return NextResponse.json(
        {
          ok: false,
          message:
            "Your enquiry could not be sent online. Please call 0422 131 659 or email harry@setapartplumbing.com.au.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Quote email request failed:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Your enquiry could not be sent online. Please call 0422 131 659 or email harry@setapartplumbing.com.au.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks. Your enquiry has been received.",
  });
}

function getRecipients(value?: string) {
  const recipients = (value || defaultRecipient)
    .split(/[;,]/)
    .map((email) => email.trim())
    .filter(Boolean);

  return [...new Set(recipients)];
}

function buildEmailBody(enquiry: {
  name: string;
  phone?: string;
  email?: string;
  suburb: string;
  service: string;
  urgency: string;
  preferredContact: "phone" | "email" | "either";
  message: string;
}) {
  const fields = [
    ["Name", enquiry.name],
    ["Phone", enquiry.phone || "Not provided"],
    ["Email", enquiry.email || "Not provided"],
    ["Suburb", enquiry.suburb],
    ["Service", enquiry.service],
    ["Urgency", enquiry.urgency],
    ["Preferred contact", enquiry.preferredContact],
    ["Message", enquiry.message],
  ] as const;

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const rows = fields
    .map(
      ([label, value]) => `
        <tr>
          <th style="padding: 10px 12px; text-align: left; vertical-align: top; background: #f3f6f8; color: #04111f; width: 170px;">${escapeHtml(label)}</th>
          <td style="padding: 10px 12px; color: #1c2d3d;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
        </tr>
      `,
    )
    .join("");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1c2d3d;">
      <h1 style="margin: 0 0 16px; color: #04111f;">New quote enquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px; border: 1px solid #dbe3ea;">
        ${rows}
      </table>
    </div>
  `;

  return { text, html };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
