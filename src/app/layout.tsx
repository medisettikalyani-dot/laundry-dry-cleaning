import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/lib/seoConfig";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "APM Laundry & Dry Cleaning | Garment Care in Hyderabad",
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
    "silk saree dry cleaning Hyderabad",
    "doorstep laundry services Hyderabad",
    "clothes cleaning services",
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
    title: "APM Laundry & Dry Cleaning | Garment Care in Hyderabad",
    description:
      "Professional laundry, steam pressing, and dry cleaning in Hyderabad. Easy online booking with doorstep pickup and delivery.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/contact-laundry.jpg",
        width: 1200,
        height: 896,
        alt: "APM Laundry & Dry Cleaning - Garment Care in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APM Laundry & Dry Cleaning | Garment Care in Hyderabad",
    description:
      "Professional wash & fold, wash & iron, and dry cleaning services in Hyderabad with doorstep pickup and delivery.",
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
              name: "Wash & Iron",
              description:
                "Gentle machine washing paired with neat steam pressing for shirts, trousers, kurtas, suits, and everyday wear.",
              provider: {
                "@id": `${siteConfig.siteUrl}/#localbusiness`,
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dry Clean",
              description:
                "Careful dry cleaning for suits, sherwanis, silk sarees, blazers, and delicate formal wear.",
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
                "Convenient doorstep pickup and return delivery for all laundry and dry cleaning orders across Hyderabad (free within 3 km).",
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
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} scroll-smooth font-sans`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#F4F8FA] text-[#1E293B] font-sans">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
