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
      "We offer complete garment care across Hyderabad, including Wash & Iron, Dry Cleaning, Wash & Fold, Ironing Only, Shoe Cleaning, Carpet Cleaning, Steam Ironing, Machine Wash, and Hand Wash. We also specialize in caring for wedding wear, sherwanis, silk sarees, curtains, and heavy blankets.",
  },
  {
    id: "pickup-delivery",
    question: "Do you provide doorstep pickup and delivery?",
    answer:
      "Yes, we pick up and deliver right to your doorstep across Hyderabad. Pickup and delivery is free within 3 km of our Panchavati Colony center. We serve Manikonda, Puppalguda, Narsingi, Jubilee Hills, Banjara Hills, Hitec City, Madhapur, Gachibowli, Kondapur, and nearby localities. You can book easily on WhatsApp or through our website form.",
  },
  {
    id: "pricing-calculation",
    question: "How is laundry and dry cleaning pricing calculated?",
    answer:
      "Our pricing is straightforward and transparent. Wash & Fold is charged by weight, while Wash & Iron and Dry Cleaning are priced per piece depending on the garment. Doorstep pickup is free within 3 km. Feel free to message us on WhatsApp for price details or an estimate.",
  },
  {
    id: "processing-time",
    question: "How long does cleaning and delivery take?",
    answer:
      "Regular laundry and wash & iron orders are usually ready in 24 to 48 hours. Items that need extra attention, such as bridal wear, heavy blankets, or delicate sarees, take about 48 to 72 hours so we can clean and inspect them thoroughly.",
  },
  {
    id: "separate-dry-cleaning",
    question: "Is dry cleaning handled separately from regular wash loads?",
    answer:
      "Yes, always. Dry clean items are processed separately using gentle, skin-safe solvents rather than water and detergent. We treat stains individually and finish each garment with steam pressing to protect delicate fabrics, embroidery, and fit—with no harsh chemical odor.",
  },
  {
    id: "prepare-clothes",
    question: "How should I prepare my clothes for doorstep pickup?",
    answer:
      "Just place your clothes in any convenient bag. Please make sure all pockets are empty. If you have garments with specific stains or items that need dry cleaning instead of washing, simply let our pickup person know or add a note when booking.",
  },
  {
    id: "booking-service",
    question: "How can I book a pickup with APM?",
    answer:
      "Booking takes less than a minute. You can tap 'Book on WhatsApp' to send us your pickup address and preferred time, or fill out the short booking form on this page.",
  },
  {
    id: "operating-hours",
    question: "What are your operating hours?",
    answer:
      "We are open Saturday through Thursday from 10:00 AM to 10:00 PM. We are closed on Fridays.",
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
