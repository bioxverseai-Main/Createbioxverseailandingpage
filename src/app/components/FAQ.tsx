import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How does BioXverse access my medical records?',
    answer: 'Through FHIR R4 APIs — the same secure standard mandated by CMS. You authorize access, we execute on your behalf. You can revoke at any time.'
  },
  {
    question: 'Is my data secure?',
    answer: 'HIPAA-compliant, AES-256 encrypted, hosted on AWS GovCloud. We never log PHI in audit trails. Your data is never sold or used for advertising. Ever.'
  },
  {
    question: "What if my provider doesn't have a portal?",
    answer: "We handle non-API providers through Direct Protocol and manual confirmation workflows. Most tasks can still be completed — it just takes slightly longer."
  },
  {
    question: 'How much does it cost?',
    answer: 'Free tier (3 tasks/month), $15/month Basic, $25/month Premium, $35/month Family Plan. Early access users get Premium free for 6 months.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 font-medium mb-8">
            Common Questions
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6">
            Everything you
            <br />
            <span className="gradient-accent">need to know</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500">
            Have more questions?{' '}
            <a
              href="mailto:hello@bioxverse.ai"
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
