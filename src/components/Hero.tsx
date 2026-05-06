import { motion } from "motion/react";
import { ArrowRight, Code2, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-sm font-medium text-slate-600 mb-8">
                <Rocket className="w-4 h-4 text-brand-primary" />
                <span>Empowering Innovation in Software</span>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Modern Software</span> <br className="hidden md:block" /> & Web Applications
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-slate-600 mb-12">
                Transforming your ideas into powerful digital solutions with misoftexpert. We specialize in cutting-edge tech to scale your business.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#products"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                >
                  View Our Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  Contact Us
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.6} className="flex-1 w-full">
            <div className="relative w-full h-[250px] md:h-[450px] bg-white rounded-[40px] border border-slate-200 p-2 shadow-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Software Dashboard"
                className="w-full h-full object-cover rounded-[32px] transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
