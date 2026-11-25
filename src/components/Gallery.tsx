import React from "react";
import Image from "next/image";

interface GalleryPhoto {
  id: string;
  title: string;
  alt: string;
  src: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: "washing",
    title: "Gentle Wash Care",
    alt: "Commercial washing machines with gentle fabric care",
    src: "/images/gallery/gallery-washing.jpg",
  },
  {
    id: "ironing",
    title: "Professional Steam Press",
    alt: "Professional steam ironing of fresh cotton garments",
    src: "/images/gallery/gallery-ironing.jpg",
  },
  {
    id: "folded",
    title: "Neatly Folded Clothes",
    alt: "Pristine stack of freshly folded linens and clothes",
    src: "/images/gallery/gallery-folded.jpg",
  },
  {
    id: "dryCleaning",
    title: "Careful Dry Cleaning",
    alt: "Dry cleaned tailored suits on boutique wooden hangers",
    src: "/images/gallery/gallery-dry-cleaning.jpg",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-12 sm:py-16 bg-[#F4F8FA]"
      aria-label="Our Garment Care Studio Gallery"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E293B]">
            Inside Our Studio
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475569] [text-wrap:pretty]">
            A look inside our Hyderabad facility, where we wash, steam press, and carefully pack your clothes.
          </p>
        </div>

        {/* Tight Single Row of 4 Clean Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E2EDF3] shadow-xs hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EBF5FA]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300 motion-reduce:transform-none"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm font-semibold text-[#1E293B]">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
