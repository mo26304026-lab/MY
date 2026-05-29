import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Truck, Globe, TrendingUp, Shield, Handshake, Send } from 'lucide-react';

const benefits = [
  { icon: TrendingUp, title: 'High Margins', desc: 'Industry-leading retail margins for maximum profitability.' },
  { icon: Truck, title: 'Fast Logistics', desc: 'Reliable supply chain with warehouses across 3 continents.' },
  { icon: Shield, title: 'Brand Support', desc: 'Full marketing kits, POS displays, and co-branding support.' },
  { icon: Globe, title: 'Global Reach', desc: 'Expanding to 50+ countries by 2026. Be part of the growth.' },
];

export default function RetailerSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="partners" ref={ref} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #000 0%, #050505 50%, #000 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold/60 font-medium flex items-center justify-center gap-2">
            <Handshake size={14} /> Partnership
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl mt-3 mb-4">
            Grow <span className="gradient-text-gold">With Us</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Join the fastest-growing premium beverage brand. Whether you're a retailer, distributor, 
            or event partner — there's a place for you in the Bailing family.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 border border-white/5 hover:border-gold/20"
            >
              <benefit.icon className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form + Info Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-8 border border-gold/10 h-full">
              <Building2 className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-space font-bold text-2xl mb-4">Distributor Program</h3>
              <p className="text-white/50 leading-relaxed mb-6">
                We're building a global distribution network for the next generation of premium beverages. 
                Our partners enjoy exclusive territorial rights, dedicated account management, and industry-leading margins.
              </p>

              <div className="space-y-4">
                {[
                  'Exclusive territory rights',
                  'Marketing & brand asset support',
                  'Competitive wholesale pricing',
                  'Dedicated account manager',
                  'Priority access to new products',
                  'Co-branded event sponsorships',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs text-white/30 mb-1">Currently serving</p>
                <p className="font-space font-bold text-2xl gradient-text-gold">30+ Countries</p>
                <p className="text-xs text-white/30 mt-1">and expanding rapidly</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              <h3 className="font-space font-bold text-2xl mb-2">Get In Touch</h3>
              <p className="text-white/40 text-sm mb-8">Fill out the form and our partnerships team will reach out within 24 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-gold" />
                  </div>
                  <h4 className="font-space font-bold text-xl mb-2">Inquiry Submitted!</h4>
                  <p className="text-white/50 text-sm">Our team will be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/40 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/40 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/40 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your interest..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/40 transition-colors duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gold w-full px-6 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-black flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
