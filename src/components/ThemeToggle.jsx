import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useGlobalContext } from "../context/context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <div className="icon" onClick={toggleDarkTheme}>
      {isDarkTheme ? <MdLightMode /> : <MdDarkMode />}
    </div>
  );
};

export default ThemeToggle;
