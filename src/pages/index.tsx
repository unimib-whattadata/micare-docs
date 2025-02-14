import { useRef } from "react";
import { Brain } from "lucide-react";

import "@site/src/css/custom.css";
import PageHeader from "@site/src/components/page-header";
import Hero from "@site/src/components/hero";
import KeyFeatures from "@site/src/components/key-features";
import UserSegments from "@site/src/components/user-segments";
import Benefits from "@site/src/components/benefits";
import Cta from "@site/src/components/cta";

export default function Home() {
  const wrapper = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapper}
      className="flex flex-col h-screen bg-gray-900 text-white overflow-y-scroll relative"
    >
      <PageHeader wrapper={wrapper} />

      <main className="flex-grow">
        <Hero />
        <KeyFeatures />
        <UserSegments />
        <Benefits />
        <Cta />
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
