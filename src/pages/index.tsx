import { useRef } from "react";
import { Brain } from "lucide-react";

import "@site/src/css/custom.css";
import PageHeader from "@site/src/components/page-header";
import Hero from "@site/src/components/hero";
import KeyFeatures from "@site/src/components/key-features";
import Benefits from "@site/src/components/benefits";
import Cta from "@site/src/components/cta";
import { ThemeProvider } from "../context/theme";
import Overview from "../components/overview";

export default function Home() {
  const wrapper = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider>
      <div
        ref={wrapper}
        className="min-h-screen bg-background text-foreground relative"
      >
        <PageHeader />

        <main className="flex-grow">
          <Hero />
          <Overview />
          <KeyFeatures />
          <Benefits />
          <Cta />
        </main>

        <footer className="bg-dots-fade-t text-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Brain className="h-6 w-6 text-accent mr-2" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient">
                  MiCare
                </span>
              </div>
              <span>
                Copyright © {new Date().getFullYear()} Whattadata srl.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
