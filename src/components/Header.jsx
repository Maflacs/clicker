import React, { useContext, useEffect } from "react";
import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";

const Header = ({ color, onRestart }) => {
  const {
    state: { darkMode },
  } = useContext(ThemeContext);

  const {
    state: { lang },
  } = useContext(LangContext);

  useEffect(() => {}, [darkMode, lang]);

  return (
    <header className={`header ${color}`}>
      <div>
        <div className="rbtn">
          <button className="restart" onClick={onRestart}>
            {lang === "hu" ? "Újraindítás" : "Restart"}
          </button>
        </div>
        <div>
          <ChangeLanguage />
          <ChangeTheme />
        </div>
        <div className="title">
          {lang === "hu" ? <h1>Varázslóiskola</h1> : <h1>Magic school</h1>}
        </div>
      </div>
    </header>
  );
};

export default Header;
