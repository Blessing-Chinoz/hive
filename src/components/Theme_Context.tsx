import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  themeClasses: {
    bg: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    navBg: string;
    cardBg: string;
    cardBgAlt: string;
    border: string;
    borderHover: string;
    backgroundGradient: string;
    glowEffect: string;
    hoverBg: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkModeState] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
  });

  const setIsDarkMode = (value: boolean) => {
    setIsDarkModeState(value);
    localStorage.setItem("theme", JSON.stringify(value));
  };

  const themeClasses = {
    bg: isDarkMode ? "bg-gray-950" : "bg-gray-50",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    navBg: isDarkMode ? "bg-black/20" : "bg-white/20",
    cardBg: isDarkMode ? "bg-black/30" : "bg-white/30",
    cardBgAlt: isDarkMode ? "bg-black/40" : "bg-white/40",
    border: isDarkMode ? "border-white/10" : "border-gray-200/30",
    borderHover: isDarkMode ? "border-white/20" : "border-gray-300/50",
    backgroundGradient: isDarkMode
      ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black"
      : "bg-gradient-to-br from-gray-100 via-white to-gray-200",
    glowEffect: isDarkMode ? "shadow-blue-500/25" : "shadow-blue-500/15",
    hoverBg: isDarkMode ? "hover:bg-white/10" : "hover:bg-gray-100/50",
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
