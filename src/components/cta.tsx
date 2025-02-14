import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Cta() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Ready to transform mental health care?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join MiCare and be part of the future of mental health support.
          </p>
          <Button size="lg" className="text-white">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
