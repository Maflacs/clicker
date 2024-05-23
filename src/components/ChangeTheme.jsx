import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import sun from "../img/sun.png";
import moon from "../img/moon.png";

const ChangeTheme = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle">
      <img src={sun} alt="sun" className="sun icon"/>
      <img src={moon} alt="moon" className="moon icon" />
      <div
        className="button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default ChangeTheme;