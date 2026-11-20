export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: "services-offered",
    question: "What types of laundry services does APM offer in Hyderabad?",
    answer:
      "APM provides three specialized services across Hyderabad: 1) Wash & Iron for everyday shirts, trousers, and ethnic wear with crisp steam pressing; 2) Dry Cleaning for suits, sherwanis, silk sarees, and delicate fabrics with gentle solvent care; and 3) Wash & Fold for regular everyday laundry billed by weight.",
  },
  {
    id: "pickup-delivery",
    question: "Do you provide doorstep pickup and delivery?",
    answer:
      "Yes. APM provides doorstep pickup and delivery across Hyderabad including Jubilee Hills, Banjara Hills, Hitec City, Madhapur, Gachibowli, Kondapur, and surrounding areas. You can book directly on WhatsApp or using our online booking form.",
  },
  {
    id: "pricing-calculation",
    question: "How is laundry and dry cleaning pricing calculated?",
    answer:
      "Pricing is simple and transparent: itemized per garment for Wash & Iron and Dry Cleaning based on fabric requirements, and by weight for daily Wash & Fold. Contact us on WhatsApp for exact estimates or custom quotes for your order.",
  },
  {
    id: "processing-time",
    question: "How long does cleaning and delivery take?",
    answer:
      "Our standard turnaround time is 24 to 48 hours for regular laundry and wash & iron services. Specialized dry cleaning for ornate bridal wear or heavy blankets may require 48 to 72 hours for thorough fabric care and inspection.",
  },
  {
    id: "separate-dry-cleaning",
    question: "Is dry cleaning handled separately from regular wash loads?",
    answer:
      "Yes, absolutely. Dry clean garments are processed in dedicated commercial units using specialized fabric-safe solvents, individual stain treatments, and custom steam finishing to protect embroidery, silks, and tailored cuts.",
  },
  {
    id: "prepare-clothes",
    question: "How should I prepare my clothes for doorstep pickup?",
    answer:
      "Place your clothes in any bag ready for our pickup agent. Check and empty all pockets. If any garment has specific stains or requires dry cleaning instead of regular wash, please let our agent know or mention it when booking.",
  },
  {
    id: "booking-service",
    question: "How can I book a pickup with APM?",
    answer:
      "Booking takes less than a minute. You can tap 'Book on WhatsApp' to send your pickup details directly to our team, or fill in our quick booking form on this page.",
  },
  {
    id: "operating-hours",
    question: "What are your operating hours?",
    answer:
      "Our pickup and customer care team operates Monday through Sunday from 8:00 AM to 9:00 PM across Hyderabad.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqList.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
