export interface GarmentItem {
  id: string;
  name: string;
  image: string;
  price: number;
  unit?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  subtitle: string;
  turnaround: string;
  priceStartingFrom?: string;
  accent: "orange" | "blue";
  photoSrc: string;
  photoAlt: string;
  garmentsHeading: string;
  garments: GarmentItem[];
}

export const washAndIronGarments: GarmentItem[] = [
  { id: "shirt", name: "Shirt", image: "/images/garments/shirt.jpg", price: 25, unit: "pc" },
  { id: "pant", name: "Trousers / Pant", image: "/images/garments/pant.jpg", price: 30, unit: "pc" },
  { id: "kurta", name: "Kurta", image: "/images/garments/kurta.jpg", price: 40, unit: "pc" },
  { id: "payjama", name: "Payjama", image: "/images/garments/payjama.jpg", price: 35, unit: "pc" },
  { id: "jubba", name: "Jubba", image: "/images/garments/jubba.jpg", price: 50, unit: "pc" },
  { id: "saree", name: "Daily Saree", image: "/images/garments/saree.jpg", price: 80, unit: "pc" },
];

export const dryCleaningGarments: GarmentItem[] = [
  { id: "suit-3pc", name: "Suit (3 PC)", image: "/images/garments/suit-3pc.jpg", price: 350, unit: "set" },
  { id: "sharwani", name: "Sherwani", image: "/images/garments/sharwani.jpg", price: 450, unit: "pc" },
  { id: "coat", name: "Blazer / Coat", image: "/images/garments/coat.jpg", price: 200, unit: "pc" },
  { id: "silk-saree", name: "Silk Saree", image: "/images/garments/saree.jpg", price: 220, unit: "pc" },
  { id: "burqa", name: "Burqa", image: "/images/garments/burqa.jpg", price: 180, unit: "pc" },
  { id: "blanket", name: "Blanket / Comforter", image: "/images/garments/blanket.jpg", price: 250, unit: "pc" },
];

export const washAndFoldGarments: GarmentItem[] = [
  { id: "daily-shirts", name: "T-Shirts & Tops", image: "/images/garments/shirt.jpg", price: 60, unit: "kg" },
  { id: "daily-pants", name: "Jeans & Trousers", image: "/images/garments/pant.jpg", price: 60, unit: "kg" },
  { id: "daily-ethnic", name: "Kurtas & Daily Wear", image: "/images/garments/kurta.jpg", price: 60, unit: "kg" },
  { id: "daily-linens", name: "Towels & Bedding", image: "/images/garments/blanket.jpg", price: 60, unit: "kg" },
];

export const servicesData: ServiceData[] = [
  {
    id: "wash-and-iron",
    title: "Wash & Iron",
    tagline: "Commercial Wash & Precision Steam Press",
    subtitle: "Thorough washing followed by crisp hand-finished steam pressing for daily office and casual wear.",
    turnaround: "24-48 Hours",
    accent: "orange",
    photoSrc: "/images/services/wash-and-iron-new.jpg",
    photoAlt: "Modern laundry studio with commercial washers and steam ironing stations",
    garmentsHeading: "Wash & Iron Garments",
    garments: washAndIronGarments,
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    tagline: "Delicate Fabric & Couture Care",
    subtitle: "Custom solvent cleaning, targeted stain treatment, and shape preservation for suits, silks, and formal wear.",
    turnaround: "48-72 Hours",
    accent: "blue",
    photoSrc: "/images/services/dry-cleaning.jpg",
    photoAlt: "Expertly dry cleaned suits and evening garments on boutique wooden hangers",
    garmentsHeading: "Dry Cleaning Garments",
    garments: dryCleaningGarments,
  },
  {
    id: "wash-and-fold",
    title: "Wash & Fold",
    tagline: "Everyday Laundry by Weight",
    subtitle: "Hypoallergenic wash, gentle tumble drying, and neat compact folding ready for your wardrobe.",
    turnaround: "24-48 Hours",
    accent: "orange",
    photoSrc: "/images/services/wash-and-fold.jpg",
    photoAlt: "Pristine stacks of washed, tumble dried, and neatly folded blankets, towels, and linens",
    garmentsHeading: "Wash & Fold Garments",
    garments: washAndFoldGarments,
  },
];
