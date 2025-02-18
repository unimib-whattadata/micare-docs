import { Users } from "lucide-react";
import { motion } from "motion/react";

const SEGMENTS = [
  "Ultra High Risk (UHR) patients",
  "First Episode Psychosis (FEP) patients",
  "Individuals with personality disorders",
  "Patients with mood and anxiety disorders",
  "Individuals with eating disorders",
  "Adolescents and young adults at risk",
];

export default function UserSegments() {
  return (
    <section id="users" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient">
          Who MiCare Supports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SEGMENTS.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Users className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{segment}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
