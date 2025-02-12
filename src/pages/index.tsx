"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@site/src/components/ui/button";
import {
  Brain,
  Users,
  Hospital,
  BarChartIcon,
  Globe,
  HeartPulse,
  Menu,
} from "lucide-react";

import "@site/src/css/custom.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector("header");
      if (header) {
        if (scrollPosition > 50) {
          header.classList.add("bg-opacity-90", "backdrop-blur-md");
        } else {
          header.classList.remove("bg-opacity-90", "backdrop-blur-md");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-500 mr-2" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              MiCare
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Features", "Users", "Benefits", "Contact"].map((item) => (
                <li key={item} className="list-none">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95 md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full">
            {["Features", "Users", "Benefits", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-bold text-white my-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg"
              alt="Abstract background"
              className="opacity-20 object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Revolutionizing Mental Health Care
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              MiCare is a comprehensive digital ecosystem integrating technology
              and clinical research to enhance diagnosis, monitoring, and
              treatment of mental health disorders.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Get Started
            </Button>
          </motion.div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Mobile App",
                  description: "Track symptoms and communicate with therapists",
                  icon: HeartPulse,
                  color: "from-green-400 to-blue-500",
                },
                {
                  title: "Clinician Dashboard",
                  description:
                    "Monitor patients and manage therapeutic pathways",
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
                  description:
                    "Digitised psychological questionnaires and tools",
                  icon: Users,
                  color: "from-red-400 to-pink-500",
                },
                {
                  title: "Data Sharing",
                  description:
                    "Facilitate research with anonymised data sharing",
                  icon: Globe,
                  color: "from-indigo-400 to-cyan-500",
                },
                {
                  title: "Versatile Use",
                  description:
                    "Adaptable to various clinical and research settings",
                  icon: Hospital,
                  color: "from-purple-400 to-indigo-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className={`inline-block p-3 rounded-full bg-gradient-to-r ${feature.color} mb-4`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Segments */}
        <section id="users" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Who MiCare Supports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Ultra High Risk (UHR) patients",
                "First Episode Psychosis (FEP) patients",
                "Individuals with personality disorders",
                "Patients with mood and anxiety disorders",
                "Individuals with eating disorders",
                "Adolescents and young adults at risk",
              ].map((segment, index) => (
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

        {/* Benefits */}
        <section id="benefits" className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Benefits of MiCare
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Personalised and accessible care",
                "Continuous patient support",
                "Effective monitoring to reduce hospitalisations",
                "Optimisation of healthcare costs",
                "Increased satisfaction for patients and therapists",
                "Progress in mental health digitalisation",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-300">
                      {benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/placeholder.svg"
              alt="Abstract background"
              className="opacity-20 object-cover"
            />
          </div>
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
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
              >
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Brain className="h-8 w-8 text-purple-500 mr-2" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                MiCare
              </span>
            </div>
            <p>&copy; 2025 MiCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
