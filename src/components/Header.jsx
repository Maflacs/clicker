import React, { useContext, useEffect } from "react";
import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";

const Header = ({onRestart}) => {

  const {
    state: { darkMode },
  } = useContext(ThemeContext);

  const {
    state: { lang },
  } = useContext(LangContext);

  useEffect(() => {}, [darkMode, lang]);
 
  return (
    <header>
      <div>
        <button onClick={onRestart}>Restart</button>
        <ChangeLanguage />
        <ChangeTheme />
      </div>
      {lang === "hu" ? <h1>Varázslóiskola</h1> : <h1>Magic school</h1> }
    </header>
  );
};

export default Header;
