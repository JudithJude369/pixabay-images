import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

// users prefer darkmode
// const getInitialDarkMode = () => {
//   const prefersDarkMode = window.matchMedia(
//     "(prefers-color-scheme:dark)"
//   ).matches;
//   const storedDarkMode = localStorage.getItem("dark-theme") === "true";
//   return storedDarkMode || prefersDarkMode;
// };

export const AppProvider = ({ children }) => {
  // setting up dark/light mode
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("dark-theme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
