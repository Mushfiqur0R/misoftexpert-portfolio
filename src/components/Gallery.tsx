import { Reveal } from "./Reveal";

const galleryImages = [
  {
    src: "https://i.postimg.cc/yNnZbWxH/summit-002.png",
    title: "Client Meetings",
    class: "md:row-span-2",
  },
  {
    src: "https://i.postimg.cc/GtFmrMnR/meeting-01.jpg",
    title: "Project Discussions",
    class: "md:col-span-2",
  },
  {
    src: "https://i.postimg.cc/fRZ2pWTF/image.png",
    title: "Innovative Workspaces",
    class: "",
  },
  {
    src: "https://i.postimg.cc/P5pWSB1M/Gemini-Generated-Image-d1vos1d1vos1d1vo.png",
    title: "Team Collaboration",
    class: "",
  },
  {
    src: "https://i.postimg.cc/zXSZVcyn/image.png",
    title: "Final Product Reviews",
    class: "md:col-span-2",
  },
];

export const Gallery = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {galleryImages.map((image, index) => (
            <Reveal key={index} delay={index * 0.1} className={image.class}>
              <div className="relative group h-full overflow-hidden rounded-[32px] cursor-pointer">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <h4 className="text-xl font-bold text-white">{image.title}</h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
