import React, { useContext } from "react";
import LangContext from "../context/LangContext";
import { getInitialState } from "../utils/state";
import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";

const Header = () => {
  const { state } = useContext(LangContext);
  const currentLang = [state.lang];

  const handleRestart = (setState) => {
    const initialState = getInitialState();
    localStorage.setItem("gameState", JSON.stringify(initialState));
    setState(initialState);
  };

  return (
    <header>
      <button onClick={handleRestart}>Restart</button>
      <ChangeLanguage />
      <ChangeTheme />
      {currentLang === "hu" ? <h1>Varázslóiskola</h1> : <h1>Magic School</h1>}
    </header>
  );
};

export default Header;
