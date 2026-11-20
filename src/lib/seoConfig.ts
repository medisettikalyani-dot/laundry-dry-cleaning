/**
 * SEO & Business Citation Configuration for APM Laundry & Dry Cleaning
 * Centralized business NAP (Name, Address, Phone) & Schema.org constants.
 */

export const siteConfig = {
  name: "APM Laundry & Dry Cleaning",
  alternateName: "APM Garment Care Hyderabad",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://laundry-dry-cleaning.vercel.app",
  description:
    "Professional laundry, wash & iron, and dry cleaning services in Hyderabad. Reliable doorstep pickup and delivery with expert garment care. Book directly on WhatsApp or call +91 93985 35017!",
  contactPhone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 93985 35017",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919398535017",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",

  // Hyderabad Physical & Service Area Details
  address: {
    streetAddress: "Road No. 36, Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
  },

  geo: {
    latitude: 17.4319,
    longitude: 78.4073,
  },

  openingHours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],

  areasServed: [
    "Jubilee Hills",
    "Banjara Hills",
    "Hitec City",
    "Madhapur",
    "Gachibowli",
    "Kondapur",
    "Begumpet",
    "Secunderabad",
    "Kukatpally",
    "Somajiguda",
  ],

  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
  priceRange: "₹₹",
};
