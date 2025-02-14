import { motion } from "motion/react";
import { Button } from "@site/src/components/ui/button";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto h-screen items-center grid sm:grid-cols-[3fr_1fr_2fr] md:grid-cols-[2fr_1fr_2fr] sm:grid-rows-1 overflow-x-clip">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 sm:px-6 lg:px-8 sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Revolutionizing Mental Health Care
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          MiCare is a comprehensive digital ecosystem integrating technology and
          clinical research to enhance diagnosis, monitoring, and treatment of
          mental health disorders.
        </p>
        <Button size="lg">Get Started</Button>
      </motion.div>
      <div className="sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:left-0 sm:absolute sm:overflow-x-clip inset-0 grid place-items-center lg:justify-center">
        <img
          src="/micare-docs/img/preview.png"
          alt="Abstract background"
          className="opacity-35 object-cover sm:max-w-none lg:max-w-full sm:max-h-[40rem] relative lg:-right-[5.3rem]"
        />
      </div>
    </section>
  );
}
