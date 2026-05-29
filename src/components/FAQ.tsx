import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What are the main ingredients in Bailing?',
    a: 'Bailing is crafted with premium caffeine (160mg per can), natural taurine, B-vitamins (B3, B6, B12), L-theanine for smooth focus, and our proprietary energy blend. All ingredients are carefully sourced and third-party tested for quality and purity.',
  },
  {
    q: 'How much sugar does Bailing contain?',
    a: 'Our Original, Tropical, and Berry editions contain 22-30g of sugar per can. For a zero-sugar option, try Bailing Zero — same great energy with natural sweeteners (stevia & erythritol) and only 10 calories.',
  },
  {
    q: 'Where can I buy Bailing?',
    a: 'Bailing is available at major retailers including Whole Foods, GNC, Walmart, Target, and 7-Eleven. You can also order directly from our website with free shipping on orders over $24. We ship to 30+ countries worldwide.',
  },
  {
    q: 'Do you offer wholesale pricing for businesses?',
    a: 'Yes! We offer competitive wholesale pricing for retailers, bars, restaurants, gyms, and event organizers. Contact our partnerships team through the distributor form above or email partners@bailing.com for pricing details.',
  },
  {
    q: 'How do I become a Bailing distributor?',
    a: 'We\'re actively expanding our distribution network globally. Fill out the partnership inquiry form on this page, and our team will review your application within 24 hours. We offer exclusive territory rights, marketing support, and industry-leading margins.',
  },
  {
    q: 'Is Bailing suitable for athletes?',
    a: 'Bailing provides clean, sustained energy perfect for training and performance. Our Zero Sugar variant is especially popular with athletes. However, as with any caffeinated beverage, we recommend consulting your healthcare provider if you have specific dietary concerns.',
  },
  {
    q: 'What makes Bailing different from other energy drinks?',
    a: 'Three things: premium ingredients with no artificial colors, a smooth taste profile developed by world-class flavor scientists (no metallic aftertaste), and a brand identity that you\'re proud to be seen with. Bailing isn\'t just a drink — it\'s a lifestyle statement.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes! We currently ship to 30+ countries across North America, Europe, Asia-Pacific, and the Middle East. International shipping typically takes 5-10 business days. Check our shipping page for specific country availability.',
  },
];

function AccordionItem({ faq, index, isOpen, onToggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`border-b border-white/5 transition-colors duration-300 ${isOpen ? 'border-crimson/20' : ''}`}
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
      >
        <span className={`text-sm sm:text-base font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 mt-0.5 transition-all duration-300 ${isOpen ? 'rotate-180 text-crimson' : 'text-white/30'}`}
        />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p className="text-sm text-white/40 leading-relaxed pb-5 pr-8">
          {faq.a}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faq" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-space font-bold text-4xl sm:text-5xl mb-4">
            Got <span className="gradient-text">Questions</span>?
          </h2>
          <p className="text-white/40 text-lg">Everything you need to know about Bailing.</p>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm mb-4">Still have questions?</p>
          <a href="mailto:hello@bailing.com" className="btn-outline px-6 py-3 rounded-full text-sm font-medium tracking-wider inline-flex items-center gap-2 text-white/60">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
