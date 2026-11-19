/**
 * SEO & Business Citation Configuration for APM Laundry & Dry Cleaning
 * Centralized business NAP (Name, Address, Phone) & Schema.org constants.
 */

export const siteConfig = {
  name: "APM Laundry & Dry Cleaning",
  alternateName: "APM Garment Care Hyderabad",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://apmlaundry.com",
  description:
    "Premium laundry, wash & iron, and dry cleaning services in Hyderabad. Fast doorstep pickup & delivery with eco-friendly garment care. Book online today!",
  contactPhone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 90000 00000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  
  // Hyderabad Physical & Service Area Details
  address: {
    streetAddress: "Jubilee Hills / Banjara Hills Hub",
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
    "Hyderabad",
    "Secunderabad",
    "Jubilee Hills",
    "Banjara Hills",
    "Hitec City",
    "Gachibowli",
    "Madhapur",
    "Kondapur",
    "Begumpet",
  ],
  
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Online Payment",
  priceRange: "$$",
};
