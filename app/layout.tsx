import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jedna Marketing — Performance-Only Patient Reactivation for Dental Practices",
  description:
    "Your practice software is full of patients who said yes and never scheduled. Jedna's Revive™ system re-contacts your unscheduled treatment plans, lapsed recall, and cold leads — you pay only per booked appointment. No retainer, no setup fee.",
  openGraph: {
    title: "Jedna Marketing — Performance-Only Patient Reactivation for Dental Practices",
    description:
      "Unscheduled treatment plans become booked appointments. Pay per result, never in advance. Built for dental practices.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jedna Marketing — Performance-Only Patient Reactivation",
    description: "Unscheduled patients become booked appointments. You pay per result, never in advance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jedna Marketing LLC",
  description:
    "Performance-only patient reactivation for dental practices. Pay per booked appointment.",
  url: "https://jednamarketing.com",
  telephone: "+12202243108",
  // TODO: Replace with actual address when confirmed
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+12202243108",
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
