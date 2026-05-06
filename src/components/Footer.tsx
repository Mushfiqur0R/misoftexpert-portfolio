import { Phone, Mail, MapPin, Github, Facebook, Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1 border-r border-slate-800 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-brand-primary">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-white">misoftexpert</span>
            </div>
            <p className="mb-8 text-slate-400">
              Transforming your ideas into powerful digital solutions. We build software that drives growth.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Mushfiqur0R" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/mushfiqA10" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6 texl-lg">Contact Info</h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-primary" />
                <div>
                  <p className="text-white font-medium">Hotline</p>
                  <a href="tel:+8809611412685" className="hover:text-brand-primary transition-colors">+880 961 141 2685</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-primary" />
                <div>
                  <p className="text-white font-medium">Webmails</p>
                  <a href="mailto:musfik@misoftexpert.cloud" className="block hover:text-brand-primary transition-colors">musfik@misoftexpert.cloud</a>
                  <a href="mailto:uzzol@misoftexpert.cloud" className="block hover:text-brand-primary transition-colors">uzzol@misoftexpert.cloud</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6 texl-lg">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#home" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-brand-primary transition-colors">Products</a></li>
              <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Portfolio</a></li>
              <li><a href="#gallery" className="hover:text-brand-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6 texl-lg">Our Motto</h4>
            <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10">
              <p className="text-sm text-slate-400 italic">"Delivering excellence in every line of code. We don't just build software; we build partnerships for the future."</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} misoftexpert. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
