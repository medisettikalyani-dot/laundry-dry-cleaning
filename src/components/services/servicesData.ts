export type ServiceCategory = "all" | "laundry" | "dryclean" | "home";

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  turnaround: string;
  badge?: string;
  accent: "blue" | "green";
  category: "laundry" | "dryclean" | "home";
  features: string[];
}

export interface SpecialItem {
  id: string;
  title: string;
  subtitle: string;
  turnaround: string;
  image: string;
  imageAlt: string;
  tag?: string;
  tagType?: "blue" | "green" | "amber";
  rating?: number;
  ratingCount?: number;
  shortDescription?: string;
  badge?: string;
  description?: string;
  careHighlights?: string[];
}

/**
 * 9 Main Services provided by APM Laundry & Dry Cleaning
 * 1. Wash & Iron
 * 2. Dry Cleaning
 * 3. Wash & Fold
 * 4. Ironing Only
 * 5. Shoe Cleaning
 * 6. Carpet Cleaning
 * 7. Steam Iron
 * 8. Electric Wash
 * 9. Hand Wash
 */
export const servicesList: ServiceItem[] = [
  {
    id: "wash-and-iron",
    title: "Wash & Iron",
    shortDescription:
      "Thorough wash finished with neat, crisp steam pressing.",
    image: "/images/services/wash-and-iron-new.jpg",
    imageAlt: "Crisply pressed shirts and garments in modern laundry studio",
    turnaround: "24–48h",
    badge: "Most Popular",
    accent: "blue",
    category: "laundry",
    features: [
      "Hygienic deep cleaning",
      "Delivered on hangers or neatly folded",
    ],
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    shortDescription:
      "Gentle cleaning for delicate fabrics, with no harsh chemicals or smell.",
    image: "/images/services/dry-cleaning.jpg",
    imageAlt: "Expertly dry cleaned suits and blazers on wooden hangers",
    turnaround: "48–72h",
    badge: "Organic Care",
    accent: "green",
    category: "dryclean",
    features: [
      "Protects color, fit, and delicate fabric",
      "Careful stain removal before cleaning",
    ],
  },
  {
    id: "wash-and-fold",
    title: "Wash & Fold",
    shortDescription:
      "Everyday clothes washed, dried, and neatly folded for your wardrobe.",
    image: "/images/services/wash-and-fold.jpg",
    imageAlt: "Neatly folded fresh clothes and towels in clean stacks",
    turnaround: "24–48h",
    badge: "Everyday Essential",
    accent: "blue",
    category: "laundry",
    features: [
      "Sorted by color and washed with mild soap",
      "Neatly packed and ready to put away",
    ],
  },
  {
    id: "ironing-only",
    title: "Ironing Only",
    shortDescription:
      "Smooth, wrinkle-free steam pressing for your clean clothes.",
    image: "/images/services/ironing-only.jpg",
    imageAlt: "Professional steam iron pressing formal dress shirt with sharp creases",
    turnaround: "24h",
    badge: "Quick 24h",
    accent: "green",
    category: "dryclean",
    features: [
      "Neat collars, cuffs, and sharp creases",
      "Returned on hangers without wrinkles",
    ],
  },
  {
    id: "shoe-cleaning",
    title: "Shoe Cleaning",
    shortDescription:
      "Detailed cleaning, sole brightening, and deodorizing for sneakers and leather shoes.",
    image: "/images/services/shoe-cleaning.jpg",
    imageAlt: "Clean restored sneakers and polished leather shoes with care brushes",
    turnaround: "48–72h",
    badge: "Footwear Care",
    accent: "blue",
    category: "home",
    features: [
      "Gentle hand scrub for uppers and soles",
      "Deodorized and conditioned",
    ],
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    shortDescription:
      "Deep dust removal and gentle shampooing for rugs and carpets.",
    image: "/images/services/carpet-cleaning.jpg",
    imageAlt: "Professional deep cleaning extraction for luxury living room carpet",
    turnaround: "48–72h",
    badge: "Deep Clean",
    accent: "green",
    category: "home",
    features: [
      "Removes trapped dust and pet hair",
      "Spot treatment for spills and stains",
    ],
  },
  {
    id: "steam-iron",
    title: "Steam Iron",
    shortDescription:
      "Gentle steam pressing that removes wrinkles without scorching delicate cloth.",
    image: "/images/services/steam-iron.jpg",
    imageAlt: "Professional vertical garment steamer smoothing designer attire",
    turnaround: "24–48h",
    badge: "Gentle Steam",
    accent: "blue",
    category: "dryclean",
    features: [
      "No shine marks or burn risk",
      "Safe for silks, chiffon, and delicate fabrics",
    ],
  },
  {
    id: "electric-wash",
    title: "Electric Wash",
    shortDescription:
      "Reliable machine wash with gentle spin cycles for everyday clothes.",
    image: "/images/services/electric-wash.jpg",
    imageAlt: "Modern electric washing machine in a clean, minimalist laundry space",
    turnaround: "24–48h",
    badge: "Machine Wash",
    accent: "blue",
    category: "laundry",
    features: [
      "Temperature-controlled wash cycles",
      "Thorough rinsing for a fresh clean",
    ],
  },
  {
    id: "hand-wash",
    title: "Hand Wash",
    shortDescription:
      "Gentle hand wash using mild soap for delicate fabrics and woolens.",
    image: "/images/services/hand-wash.jpg",
    imageAlt: "Gentle manual hand washing of delicate luxury silk fabric",
    turnaround: "48h",
    badge: "Hand Care",
    accent: "green",
    category: "laundry",
    features: [
      "Careful washing by hand",
      "Dried flat to keep garment shape",
    ],
  },
];

/**
 * Special Items accepted by APM Laundry
 * Simple, neat, and elegant.
 * 1. Wedding Wear
 * 2. Sherwani
 * 3. Heavy Sarees
 * 4. Curtains
 * 5. Blankets
 */
export const specialItemsList: SpecialItem[] = [
  {
    id: "wedding-wear",
    title: "Wedding Wear",
    subtitle: "Bridal lehengas, gowns & party wear",
    shortDescription:
      "Careful cleaning for bridal wear with special attention to embroidery, stones, and delicate fabric.",
    turnaround: "3–4 Days",
    tag: "BEST SELLER",
    tagType: "amber",
    rating: 4.9,
    ratingCount: 142,
    image: "/images/garments/special-wedding-wear.jpg",
    imageAlt: "Exquisite bridal lehenga and festive wedding wear on boutique display",
    careHighlights: [
      "Safe on stones, beads, and embroidery",
      "Packed with protective tissue paper",
    ],
  },
  {
    id: "sherwani",
    title: "Sherwani",
    subtitle: "Designer sherwanis, kurtas & ethnic wear",
    shortDescription:
      "Specialized dry cleaning to protect fine thread work, fabric sheen, and the tailored fit.",
    turnaround: "3–4 Days",
    tag: "ROYAL ETHNIC",
    tagType: "green",
    rating: 4.9,
    ratingCount: 98,
    image: "/images/garments/special-sherwani.jpg",
    imageAlt: "Royal embroidered cream designer sherwani on mannequin",
    careHighlights: [
      "Protects brocade, zari, and fine threads",
      "Steam pressed to maintain proper shape",
    ],
  },
  {
    id: "heavy-sarees",
    title: "Heavy Sarees",
    subtitle: "Kanchipuram, Banarasi & pure silk sarees",
    shortDescription:
      "Gentle cleaning and roll pressing to preserve pure silk, crisp pleats, and golden zari work.",
    turnaround: "48–72h",
    tag: "POPULAR",
    tagType: "blue",
    rating: 4.9,
    ratingCount: 185,
    image: "/images/garments/special-heavy-sarees.jpg",
    imageAlt: "South Indian pure silk saree with heavy gold zari border and rich pallu",
    careHighlights: [
      "Roll pressed for smooth, sharp pleats",
      "Prevents dulling and keeps zari bright",
    ],
  },
  {
    id: "curtains",
    title: "Curtains",
    subtitle: "Drapes, sheer curtains & blackout curtains",
    shortDescription:
      "Deep dust removal and steam pressing so your curtains hang evenly and smell fresh.",
    turnaround: "3–4 Days",
    tag: "HOME DRAPES",
    tagType: "green",
    rating: 4.8,
    ratingCount: 112,
    image: "/images/garments/special-curtains.jpg",
    imageAlt: "Floor-to-ceiling designer patterned window curtains and drapes",
    careHighlights: [
      "Thorough dust and odor removal",
      "Steam pressed for an even hang",
    ],
  },
  {
    id: "blankets",
    title: "Blankets",
    subtitle: "Quilts, comforters & winter blankets",
    shortDescription:
      "Thoroughly washed, sanitized, and dried in large machines to keep them soft and fresh.",
    turnaround: "48–72h",
    tag: "WINTER CARE",
    tagType: "blue",
    rating: 4.9,
    ratingCount: 164,
    image: "/images/garments/special-blankets.jpg",
    imageAlt: "Clean freshly laundered and folded quilt and comforter",
    careHighlights: [
      "Deep cleaned and sanitized",
      "Packed in clean, dust-free covers",
    ],
  },
];

/**
 * Backward compatibility alias
 */
export const specialGarmentsList = specialItemsList;
