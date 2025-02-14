import { motion } from "motion/react";

const BENEFITS = [
  "Personalised and accessible care",
  "Continuous patient support",
  "Effective monitoring to reduce hospitalisations",
  "Optimisation of healthcare costs",
  "Increased satisfaction for patients and therapists",
  "Progress in mental health digitalisation",
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-dots-section-fade-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Benefits of MiCare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                  {index + 1}
                </div>
              </div>
              <span className="text-lg font-medium text-gray-300">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
