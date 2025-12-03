import { motion } from 'framer-motion@10.18.0';
import { Frown, Clock, DollarSign } from 'lucide-react';

export function Problem() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Googling symptoms is scary. <br className="hidden md:block" />Doctors take days.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Frown className="w-8 h-8 text-orange-500" />,
              title: "Google gives terrifying results",
              desc: "Web searches often lead to worst-case scenarios, causing unnecessary anxiety."
            },
            {
              icon: <Clock className="w-8 h-8 text-blue-500" />,
              title: "Doctors are booked for weeks",
              desc: "Getting an appointment with a primary care physician can take 20+ days."
            },
            {
              icon: <DollarSign className="w-8 h-8 text-green-500" />,
              title: "Urgent care costs hundreds",
              desc: "Visiting urgent care for minor issues drains your wallet unnecessarily."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-6 text-[#1a1a1a]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
