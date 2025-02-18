import { Brain, Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Button } from "@site/src/components/ui/button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "motion/react";
import { cn } from "@site/src/lib/utils";
import ThemeToggle from "./theme-toggle";

const Menu = motion.create(MenuIcon);
const X = motion.create(XIcon);

export default function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isMenuOpen) {
      controls.start("menuOpen");
      return body.classList.add("!overflow-hidden");
    }
    controls.start("menuClosed");
    body.classList.remove("!overflow-hidden");
  }, [isMenuOpen]);

  const variants = {
    menuOpen: {
      backdropFilter: "blur(0px)",
    },
    menuClosed: {
      backdropFilter: "blur(3px)",
    },
  };

  const controls = useAnimationControls();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={cn(
          "fixed w-full z-50 duration-300",
          !isMenuOpen && "bg-dots"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="flex items-center !no-underline"
            onClick={() => setIsMenuOpen(false)}
          >
            <Brain className="h-8 w-8 text-accent mr-2" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient">
              MiCare
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 mb-0">
              {["Overview", "Features", "Benefits", "Contact"].map((item) => (
                <li key={item} className="list-none flex items-center">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground hover:text-accent !no-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="list-none flex items-center">
                <a
                  href="/micare-docs/docs/getting-started/#installation-instructions"
                  className="text-foreground hover:text-accent !no-underline"
                >
                  Documentation
                </a>
              </li>
            </ul>
            <ThemeToggle />
          </nav>
          <Button
            size="icon"
            className={cn(
              "md:hidden overflow-clip flex flex-col items-center py-2.5",
              isMenuOpen ? "justify-start" : "justify-end"
            )}
            onClick={toggleMenu}
          >
            <X
              layout
              transition={{
                type: "spring",
                visualDuration: 0.2,
                bounce: 0.2,
              }}
              className="h-6 w-6"
            />
            <Menu
              layout
              transition={{
                type: "spring",
                visualDuration: 0.2,
                bounce: 0.2,
              }}
              className="h-6 w-6"
            />
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full bg-dots-section">
              {["Overview", "Features", "Benefits", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-bold text-white my-4"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))}
              <ThemeToggle className="absolute right-2 bottom-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
