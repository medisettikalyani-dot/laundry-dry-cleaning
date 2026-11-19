export interface GarmentItem {
  id: string;
  name: string;
  image: string;
}

export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  subtitle: string;
  badge: string;
  accent: "orange" | "blue";
  photoSrc: string;
  photoAlt: string;
  garmentsHeading: string;
  garments: GarmentItem[];
}

export const garmentsList: GarmentItem[] = [
  { id: "shirt", name: "Shirt", image: "/images/garments/shirt.jpg" },
  { id: "pant", name: "Pant", image: "/images/garments/pant.jpg" },
  { id: "kurta", name: "Kurta", image: "/images/garments/kurta.jpg" },
  { id: "payjama", name: "Payjama", image: "/images/garments/payjama.jpg" },
  { id: "jubba", name: "Jubba", image: "/images/garments/jubba.jpg" },
  { id: "burqa", name: "Burqa", image: "/images/garments/burqa.jpg" },
  { id: "sharwani", name: "Sharwani", image: "/images/garments/sharwani.jpg" },
  { id: "coat", name: "Coat", image: "/images/garments/coat.jpg" },
  { id: "suit-3pc", name: "Suit (3 PC)", image: "/images/garments/suit-3pc.jpg" },
  { id: "saree", name: "Saree", image: "/images/garments/saree.jpg" },
  { id: "blanket", name: "Blanket", image: "/images/garments/blanket.jpg" },
];

export const servicesData: ServiceData[] = [
  {
    id: "wash-and-iron",
    title: "Wash & Iron",
    tagline: "Everyday Garment Care",
    subtitle: "Fresh, clean and perfectly pressed clothes for your everyday wardrobe.",
    badge: "Commercial Wash & Steam Press",
    accent: "orange",
    photoSrc: "/images/services/wash-and-iron-new.jpg",
    photoAlt: "Modern bright laundry care studio with commercial washing machines and steam iron press",
    garmentsHeading: "Garments We Clean",
    garments: garmentsList,
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    tagline: "Delicate & Premium Care",
    subtitle: "Specialized garment cleaning with careful attention to delicate and premium clothing.",
    badge: "Eco-Friendly Solvent Care",
    accent: "blue",
    photoSrc: "/images/services/dry-cleaning.jpg",
    photoAlt: "Professional dry cleaned garments and luxury wear",
    garmentsHeading: "Garments We Dry Clean",
    garments: garmentsList,
  },
];
