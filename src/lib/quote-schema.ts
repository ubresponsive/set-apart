import { z } from "zod";

export const serviceOptions = [
  "Emergency plumbing",
  "Blocked drains",
  "Hot water systems",
  "Leak detection",
  "Gas fitting",
  "Tap or toilet repairs",
  "Bathroom or kitchen plumbing",
  "Stormwater or drainage",
  "General maintenance",
  "Residential or commercial plumbing",
  "Other",
] as const;

export const urgencyOptions = [
  "Emergency - call me as soon as possible",
  "Today",
  "Within the next few days",
  "Planning ahead",
] as const;

export const quoteSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name."),
    phone: z.string().trim().optional(),
    email: z.string().trim().optional(),
    suburb: z.string().trim().min(2, "Please enter your suburb."),
    service: z.enum(serviceOptions, { error: "Please choose a service." }),
    urgency: z.enum(urgencyOptions, { error: "Please choose an urgency." }),
    preferredContact: z.enum(["phone", "email", "either"]),
    message: z.string().trim().min(10, "Please add a short message."),
    consent: z.boolean().refine(Boolean, "Please confirm consent to be contacted."),
    website: z.string().optional(),
  })
  .superRefine((value, ctx) => {
    const hasPhone = value.phone && value.phone.replace(/\D/g, "").length >= 8;
    const hasEmail = value.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email);

    if (!hasPhone && !hasEmail) {
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Please provide a phone number or email address.",
      });
    }

    if (value.email && !hasEmail) {
      ctx.addIssue({
        code: "custom",
        path: ["email"],
        message: "Please enter a valid email address.",
      });
    }
  });

export type QuoteRequest = z.infer<typeof quoteSchema>;
