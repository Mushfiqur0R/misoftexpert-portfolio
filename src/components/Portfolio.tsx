import { Reveal } from "./Reveal";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const clients = [
  {
    name: "A and H Enterprise",
    projects: [
      { name: "AMS Deployment", link: "https://ams.aandhenterprise.com/" },
      { name: "Full-Stack Website", link: "https://aandhenterprise.com" },
    ],
    image: "https://i.postimg.cc/P5YLphm6/image.png",
  },
  {
    name: "Product Zoo BD",
    projects: [
      { name: "E-Commerce Platform", link: "https://productzoobd.com" },
    ],
    image: "https://i.postimg.cc/Vkd8KDSR/product-zoo-bd-logo.png",
  },
  {
    name: "LGED",
    projects: [
      { name: "IWRM MIS System", link: "http://103.140.64.90:83/" },
    ],
    image: "https://i.postimg.cc/m2rfr8SR/image.png",
  },
  {
    name: "DTMABD",
    projects: [
      { name: "AMS Deployment", link: "https://ams.dtmabd.com/" },
    ],
    image: "https://i.postimg.cc/ncrgxMHp/image.png",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
              <p className="text-lg text-slate-600">
                Our success is defined by the success of our clients. Here's a look at some of the organizations we've had the pleasure to work with.
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="px-6 py-2 rounded-full border border-slate-200 font-medium text-slate-500">
                10+ Major Projects
              </div>
              <div className="px-6 py-2 rounded-full border border-slate-200 font-medium text-slate-500">
                Bangladesh & Beyond
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <Reveal key={client.name} delay={0.2 * index}>
              <div className="group relative overflow-hidden rounded-[40px] bg-slate-50 border border-slate-100 h-[450px] flex flex-col">
                <div className="relative flex-1 p-12 flex items-center justify-center bg-white border-b border-slate-100">
                   <img
                    src={client.image}
                    alt={client.name}
                    className="w-full max-h-[200px] object-contain transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{client.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {client.projects.map((project) => (
                      <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 hover:border-brand-primary hover:text-brand-primary transition-all text-sm font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {project.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
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
