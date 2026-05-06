import { Reveal } from "./Reveal";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Build Something <span className="text-brand-primary">Great Together.</span></h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  Have a vision for your next digital product? We're here to help you turn it into reality. Reach out and let's start the conversation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="p-4 rounded-2xl bg-brand-primary text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Call Us</h4>
                    <a href="tel:+8809611412685" className="text-slate-600 hover:text-brand-primary transition-colors text-lg">+880 961 141 2685</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="p-4 rounded-2xl bg-brand-primary text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Email Us</h4>
                    <div className="space-y-1">
                      <a href="mailto:musfik@misoftexpert.cloud" className="block text-slate-600 hover:text-brand-primary transition-colors">musfik@misoftexpert.cloud</a>
                      <a href="mailto:uzzol@misoftexpert.cloud" className="block text-slate-600 hover:text-brand-primary transition-colors">uzzol@misoftexpert.cloud</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="p-4 rounded-2xl bg-brand-primary text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Visit Us</h4>
                    <p className="text-slate-600">Available Remotely & In-Person across Bangladesh.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="bg-slate-900 rounded-[48px] p-10 md:p-14 shadow-2xl relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px] -z-0" />
               
               <form className="relative space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-brand-primary/20"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
