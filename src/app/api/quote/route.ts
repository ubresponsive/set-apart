import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";

const recentRequests = new Map<string, number>();

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

  if (!process.env.RESEND_API_KEY || !process.env.QUOTE_FROM_EMAIL) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "The quote form is validated, but email delivery is not configured yet. Please call 0422 131 659 or email harry@setapartplumbing.com.au.",
      },
      { status: 503 },
    );
  }

  // TODO: Send validated enquiry to QUOTE_RECIPIENT_EMAIL using Resend, SendGrid or host email.
  return NextResponse.json({
    ok: true,
    message: "Thanks. Your enquiry has been received.",
  });
}
