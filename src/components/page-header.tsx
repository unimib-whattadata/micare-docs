import { Brain, Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Button } from "@site/src/components/ui/button";
import { useEffect, useState } from "react";
import { AnimatePresence, isMotionComponent, motion } from "motion/react";
import { cn } from "../lib/utils";

const Menu = motion(MenuIcon);
const X = motion(XIcon);

export default function PageHeader(props: {
  wrapper: React.MutableRefObject<HTMLDivElement>;
}) {
  const { wrapper } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen && wrapper.current.classList.add("overflow-hidden");
  }, [isMenuOpen, wrapper]);

  return (
    <>
      <header className="sticky top-0 w-full z-50 transition-all duration-300 bg-dots">
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
            size="icon"
            className={cn(
              "md:hidden overflow-clip flex flex-col items-center p-2",
              isMenuOpen ? "justify-start" : "justify-end"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <X
              layout
              key="x"
              initial={false}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
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
      </AnimatePresence>
    </>
  );
}
