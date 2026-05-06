import { Reveal } from "./Reveal";
import { Github, Facebook, Mail } from "lucide-react";

const founders = [
  {
    name: "Musfikur Rahman",
    role: "Founder",
    email: "musfik@misoftexpert.cloud",
    image: "https://i.postimg.cc/BQz5Kn2T/image.png",
  },
  {
    name: "Engr. Iqram H Uzzol",
    role: "Founder",
    email: "uzzol@misoftexpert.cloud",
    image: "https://i.postimg.cc/vZHBbr4n/image.png",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Driven by Passion, Built on <span className="text-brand-primary">Expertise.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Misoftexpert is more than just a software company. We are a team of visionaries dedicated to pushing the boundaries of what's possible in the digital world. Our mission is to provide businesses with the tools they need to thrive in a rapidly evolving technological landscape.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Mushfiqur0R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-primary hover:text-white transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/mushfiqA10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-primary hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-3xl blur-2xl -z-10" />
              <img
                src="https://picsum.photos/seed/office-space/800/600"
                alt="Our Workspace"
                className="w-full rounded-2xl shadow-xl shadow-slate-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={0.2 * index}>
              <div className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-brand-primary transition-colors overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  </div>
                  <div className="text-center md:text-left space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">{founder.name}</h3>
                    <p className="text-brand-primary font-medium">{founder.role}</p>
                    <a
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      {founder.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
