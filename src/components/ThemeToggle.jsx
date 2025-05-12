import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useGlobalContext } from "../context/context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <div className="icon" onClick={toggleDarkTheme}>
      {isDarkTheme ? <MdDarkMode /> : <MdLightMode />}
    </div>
  );
};

export default ThemeToggle;
