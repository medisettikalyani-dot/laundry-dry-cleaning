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
    "Professional laundry, wash & iron, and dry cleaning services in Hyderabad. Free doorstep pickup and delivery within 3 km. Over 40,000 orders delivered with care. Book easily on WhatsApp or call +91 83747 83347.",
  contactPhone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 83747 83347",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918374783347",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",

  // Business highlights & trust stats
  stats: {
    experience: "2+ Years",
    orders: "40,000+ Orders",
    delivery: "Free Within 3 km",
    solvent: "Eco-Friendly Cleaning",
    hours: "10:00 AM – 10:00 PM (Closed Fridays)",
  },

  // Hyderabad Physical & Service Area Details
  address: {
    streetAddress:
      "Plot 113, Road No. 10B, Panchavati Colony, Near Brundhawan Residence & 9 Star Apartment, Opp. Muppa Villas",
    addressLocality: "Manikonda, Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500089",
    addressCountry: "IN",
  },

  geo: {
    latitude: 17.4042,
    longitude: 78.3758,
  },

  openingHours: [
    {
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
  ],

  areasServed: [
    "Panchavati Colony",
    "Manikonda",
    "Puppalguda",
    "Narsingi",
    "Jubilee Hills",
    "Banjara Hills",
    "Hitec City",
    "Madhapur",
    "Gachibowli",
    "Kondapur",
  ],

  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
  priceRange: "₹₹",
};
