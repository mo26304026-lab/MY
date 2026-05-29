import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Products: ['Original', 'Zero Sugar', 'Tropical', 'Berry Blast', 'Gold Reserve', 'Merch'],
  Company: ['About', 'Careers', 'Press', 'Blog', 'Sustainability'],
  Support: ['Contact', 'FAQ', 'Shipping', 'Returns', 'Privacy Policy', 'Terms'],
  Partners: ['Distributors', 'Retailers', 'Events', 'Sponsorships', 'Wholesale'],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer ref={ref} className="relative bg-black border-t border-white/5">
      {/* Newsletter banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-crimson/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gold/10 rounded-full blur-[80px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-space font-bold text-3xl sm:text-4xl mb-3">
                  Stay in the <span className="gradient-text">Loop</span>
                </h3>
                <p className="text-white/40 text-sm sm:text-base max-w-md">
                  New drops, exclusive access, and first-look content. Join 50,000+ in the Bailing community.
                </p>
              </div>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center lg:text-right"
                >
                  <p className="text-gold font-semibold text-lg">You're in! 🎉</p>
                  <p className="text-white/40 text-sm mt-1">Check your inbox for a welcome surprise.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-crimson/40 transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    className="btn-primary px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white flex items-center gap-2 flex-shrink-0"
                  >
                    <Send size={16} />
                    <span className="hidden sm:inline">Subscribe</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-crimson to-gold flex items-center justify-center font-bold text-xs font-space">
                B
              </div>
              <span className="font-space font-bold text-lg tracking-[0.2em] uppercase">Bailing</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-xs">
              Premium energy for the bold. Crafted for those who refuse to settle. Drink the energy.
            </p>
            <div className="space-y-2 text-sm text-white/30">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-white/20 flex-shrink-0" />
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-white/20 flex-shrink-0" />
                <span>+1 (800) BAILING</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-white/20 flex-shrink-0" />
                <span>hello@bailing.com</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm tracking-wider uppercase text-white/60 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/30 hover:text-white/70 transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © 2024 Bailing Energy. All rights reserved. Drink responsibly.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
