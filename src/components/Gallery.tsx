import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { galleryItems, DetailsModalData } from "../constants/data";

interface GalleryProps {
  onGalleryClick: (data: DetailsModalData) => void;
}

export const Gallery = ({ onGalleryClick }: GalleryProps) => {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Life at misoftexpert</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A glimpse into our daily hustle, creative process, and the environment where ideas come to life.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-fr">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() =>
                  onGalleryClick({
                    title: item.title,
                    subtitle: "Gallery Highlight",
                    image: item.image,
                    details: item.description,
                  })
                }
                className="relative w-full aspect-square overflow-hidden rounded-[24px] cursor-pointer border border-slate-200 bg-slate-50 p-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 md:opacity-0 md:hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h4 className="text-sm md:text-lg font-bold text-white leading-tight">{item.title}</h4>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
