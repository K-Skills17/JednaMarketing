import { NextRequest, NextResponse } from "next/server";

// The exact consent text stored as a legal artifact.
// Version this string whenever the checkbox label changes.
const CONSENT_TEXT_V1 =
  "I agree to receive SMS text messages from Jedna Marketing about my inquiry, appointment scheduling, and practice-growth updates at the phone number provided. Consent is not a condition of purchase. Message frequency varies. Message & data rates may apply. Reply STOP to opt out or HELP for help.";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, practiceName, email, phone, message, smsConsent } = body as {
    name?: string;
    practiceName?: string;
    email?: string;
    phone?: string;
    message?: string;
    smsConsent?: boolean;
  };

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  // Build consent record — this is a legal artifact. Persist it.
  const consentRecord = {
    timestamp: new Date().toISOString(),
    name,
    practiceName: practiceName || null,
    email,
    phone: phone || null,
    message: message || null,
    smsConsent: Boolean(smsConsent),
    // Only store consent text if the box was actually checked
    consentText: smsConsent ? CONSENT_TEXT_V1 : null,
    consentTextVersion: smsConsent ? "v1" : null,
    sourceUrl: request.headers.get("referer") || "/contact",
    // IP for consent proof (get from proxy headers or direct)
    ipAddress:
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown",
    userAgent: request.headers.get("user-agent") || "unknown",
  };

  // Always log to console (minimum viable consent record)
  console.log("[JEDNA CONTACT] New submission:", JSON.stringify(consentRecord, null, 2));

  // --- STORAGE: Replace/extend with your chosen destination ---
  //
  // Option A — Webhook (Make.com, Zapier, n8n):
  //   Set CONTACT_WEBHOOK_URL in .env.local
  //   The webhook can log to Google Sheets, Airtable, or send email.
  //
  // Option B — Resend email:
  //   Set RESEND_API_KEY in .env.local and install resend package.
  //
  // Option C — Direct database (Supabase, PlanetScale, etc.)
  //   Add SDK + connection string.

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(consentRecord),
      });
      if (!webhookRes.ok) {
        console.error("[JEDNA CONTACT] Webhook responded with status:", webhookRes.status);
      }
    } catch (err) {
      // Don't fail the user request if webhook fails — log and continue
      console.error("[JEDNA CONTACT] Webhook delivery failed:", err);
    }
  } else {
    console.warn(
      "[JEDNA CONTACT] No CONTACT_WEBHOOK_URL configured. " +
      "Consent record logged to console only. Set CONTACT_WEBHOOK_URL in .env.local to persist it."
    );
  }

  return NextResponse.json({ ok: true });
}
