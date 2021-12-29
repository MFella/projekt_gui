import React, { createContext, useEffect, useState } from "react";

const themeColours = {
  light: {
    textColor: "#182026",
    backgroundColor: "#ffffff",
    backgroundCard: "#EBF1F5"
  },
  dark: {
    textColor: "#ffffff",
    backgroundColor: "#182026",
    backgroundCard: "#394B59"
  }
};

type ThemeName = "light" | "dark";

type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
    document.body.style.setProperty(
      "--background-card",
      themeColours[name].backgroundCard
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
