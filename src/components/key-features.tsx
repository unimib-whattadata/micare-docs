import {
  BarChartIcon,
  Brain,
  Globe,
  HeartPulse,
  Hospital,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const FEATURES = [
  {
    title: "Mobile App",
    description: "Track symptoms and communicate with therapists",
    icon: HeartPulse,
    color: "from-green-400 to-blue-500",
  },
  {
    title: "Clinician Dashboard",
    description: "Monitor patients and manage therapeutic pathways",
    icon: BarChartIcon,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "AI-Powered Support",
    description: "Advanced clinical decision support systems",
    icon: Brain,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Digital Assessments",
    description: "Digitised psychological questionnaires and tools",
    icon: Users,
    color: "from-red-400 to-pink-500",
  },
  {
    title: "Data Sharing",
    description: "Facilitate research with anonymised data sharing",
    icon: Globe,
    color: "from-indigo-400 to-cyan-500",
  },
  {
    title: "Versatile Use",
    description: "Adaptable to various clinical and research settings",
    icon: Hospital,
    color: "from-purple-400 to-indigo-500",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="py-20 bg-dots-section-fade-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={cn(
                  "inline-block p-3 rounded-full bg-gradient-to-r mb-4 leading-[0]",
                  feature.color
                )}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
