import { Reveal } from "./Reveal";
import { Package, Smartphone, ExternalLink, Timer } from "lucide-react";

const products = [
  {
    title: "Account And Inventory Management System (AMS)",
    description: "Complete solution for tracking accounts, inventory, sales, and more. Robust, secure, and easy to use.",
    icon: <Package className="w-8 h-8" />,
    link: "https://ams.misoftexpert.cloud",
    status: "Live Demo Available",
    isComingSoon: false,
  },
  {
    title: "POS Software",
    description: "Cloud-based Point of Sale system tailored for super shops and retail businesses. Streamline your checkout process.",
    icon: <Smartphone className="w-8 h-8" />,
    link: "#",
    status: "Live Demo Coming Soon",
    isComingSoon: true,
  },
  {
    title: "Websites & E-Commerce Solutions",
    description: "Bespoke full-stack web applications and feature-rich e-commerce platforms designed to grow your digital presence.",
    icon: <ExternalLink className="w-8 h-8" />,
    link: "#",
    status: "Service Available",
    isComingSoon: false,
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Powerful Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We create specialized tools designed to streamline your business operations and fuel your digital growth.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={0.2 * index}>
              <div className="group h-full bg-white p-10 rounded-[32px] border border-slate-200 hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/10 transition-all flex flex-col">
                <div className="mb-8 p-4 rounded-2xl bg-slate-50 group-hover:bg-brand-primary/10 transition-colors w-fit text-brand-primary">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-col gap-4">
                   <div className={`inline-flex items-center gap-2 text-sm font-medium ${product.isComingSoon ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {product.isComingSoon ? <Timer className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />}
                    {product.status}
                  </div>

                  {!product.isComingSoon && product.link !== "#" && (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline"
                    >
                      Visit Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
