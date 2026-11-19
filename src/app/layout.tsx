import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { siteConfig } from "@/lib/seoConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "APM Laundry & Dry Cleaning | Best Garment Care in Hyderabad",
    template: "%s | APM Laundry & Dry Cleaning",
  },
  description: siteConfig.description,
  keywords: [
    "laundry services in Hyderabad",
    "dry cleaning services in Hyderabad",
    "APM laundry Hyderabad",
    "APM dry cleaning",
    "wash and fold service Hyderabad",
    "wash and iron service Hyderabad",
    "steam ironing Hyderabad",
    "suit dry cleaning Hyderabad",
    "saree dry cleaning Hyderabad",
    "doorstep laundry services Hyderabad",
    "clothes cleaning services",
    "delicate fabric care",
    "laundry pickup and delivery Hyderabad",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APM Laundry & Dry Cleaning | Best Garment Care in Hyderabad",
    description:
      "Professional laundry, steam press, and eco-friendly dry cleaning services in Hyderabad. Convenient online booking with prompt doorstep pickup and delivery.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/contact-laundry.jpg",
        width: 1200,
        height: 896,
        alt: "APM Laundry & Dry Cleaning - Premium Garment Care in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APM Laundry & Dry Cleaning | Best Garment Care in Hyderabad",
    description:
      "Professional wash & fold, wash & iron, and luxury dry cleaning services in Hyderabad with prompt doorstep pickup.",
    images: ["/images/contact-laundry.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteConfig.googleSiteVerification || undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DryCleaningOrLaundry",
      "@id": `${siteConfig.siteUrl}/#localbusiness`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      description: siteConfig.description,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/images/apm-logo.svg`,
      image: `${siteConfig.siteUrl}/images/contact-laundry.jpg`,
      telephone: siteConfig.contactPhone,
      priceRange: siteConfig.priceRange,
      currenciesAccepted: siteConfig.currenciesAccepted,
      paymentAccepted: siteConfig.paymentAccepted,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: hours.dayOfWeek,
        opens: hours.opens,
        closes: hours.closes,
      })),
      areaServed: siteConfig.areasServed.map((area) => ({
        "@type": "City",
        name: area,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "APM Garment Care Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wash & Fold",
              description:
                "Everyday routine laundry care billed by weight with eco-safe hypoallergenic detergents, careful color separation, and gentle tumble drying.",
              provider: {
                "@id": `${siteConfig.siteUrl}/#localbusiness`,
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wash & Iron",
              description:
                "Commercial-grade washing paired with crisp, hand-finished steam pressing, button checks, and collar crisping for shirts, kurtas, and daily wear.",
              provider: {
                "@id": `${siteConfig.siteUrl}/#localbusiness`,
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dry Cleaning",
              description:
                "Specialized eco-friendly solvent care for delicate and luxury garments including suits, sherwanis, silk sarees, blazers, and formal wear.",
              provider: {
                "@id": `${siteConfig.siteUrl}/#localbusiness`,
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Doorstep Pickup & Delivery in Hyderabad",
              description:
                "Convenient doorstep collection and return delivery for all laundry and dry cleaning orders across Hyderabad.",
              provider: {
                "@id": `${siteConfig.siteUrl}/#localbusiness`,
              },
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      description: siteConfig.description,
      inLanguage: "en-IN",
      publisher: {
        "@id": `${siteConfig.siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/images/apm-logo.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contactPhone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#F8F0E7] text-[#202020]">
        {children}
      </body>
    </html>
  );
}
