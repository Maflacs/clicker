import React, { useContext } from "react";
import LangContext from "../context/LangContext";

const LevelIndicator = ({ level }) => {
    const {
        state: { lang },
      } = useContext(LangContext);
    return (
      <h1>{lang === "hu" ? `Szint: ${level}` : `Level: ${level}`}</h1>
    );
  }; 

  export default LevelIndicator