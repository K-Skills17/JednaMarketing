import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jedna Marketing — Performance-Only Patient Reactivation for Cash-Pay Practices",
  description:
    "Your CRM is full of patients who almost booked. Jedna's Revive™ system re-contacts every lead you've already paid for — you pay only per booked appointment. No retainer, no setup fee.",
  openGraph: {
    title: "Jedna Marketing — Performance-Only Patient Reactivation",
    description:
      "Dead leads become booked appointments. You pay per result, never in advance. Built for med spas, aesthetics clinics, and cash-pay wellness practices.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jedna Marketing — Performance-Only Patient Reactivation",
    description: "Dead leads become booked appointments. You pay per result, never in advance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jedna Marketing",
  description:
    "Performance-only patient reactivation for cash-pay health and wellness practices.",
  url: "https://jednamarketing.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "English",
  },
  areaServed: "US",
  serviceType: "Patient Reactivation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
