import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@site/src/components/ui/button";
import { useEffect } from "react";
import { useTheme } from "../context/theme";
import { cn } from "../lib/utils";

// XXX: Theme is not persisted over sessions

const Moon = motion.create(MoonIcon);
const Sun = motion.create(SunIcon);

type Props = {
  className?: string;
};
export default function ThemeToggle(props: Props) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;

    root.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Button
      size="icon"
      variant="outline"
      className={cn(
        "overflow-clip flex flex-col items-center py-2.5 bg transition-all",
        theme === "dark"
          ? "justify-start [&_svg]:mb-1"
          : "justify-end [&_svg]:mt-1",
        props.className
      )}
      onClick={toggleTheme}
    >
      <Moon
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
        className="h-6 w-6"
      />
      <Sun
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
        className="h-6 w-6"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
