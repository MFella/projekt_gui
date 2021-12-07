import React, { createContext, useEffect, useState } from "react";

const themeColours = {
  light: {
    textColor: "#182026",
    backgroundColor: "#fff"
  },
  dark: {
    textColor: "#ffffff",
    backgroundColor: "#182026"
  }
};

type ThemeName = "light" | "dark";
type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};
const ThemeContext = createContext<ThemeContextType>(undefined!);

type Props = {
  children: React.ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const setTheme = (name: ThemeName) => {
    document.body.style.setProperty(
      "--text-color",
      themeColours[name].textColor
    );
    document.body.style.setProperty(
      "--background-color",
      themeColours[name].backgroundColor
    );
    setThemeName(name);
  };

  useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
