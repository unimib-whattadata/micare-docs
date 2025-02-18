import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocaleStorageState } from "../hooks/use-local-state";

type ThemeContextType = {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
};
const themeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

export const ThemeProvider = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useLocaleStorageState<"dark" | "light">(
    "dark",
    "theme"
  );

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(themeContext);

  return { theme, setTheme };
};
