import React from "react";

const LevelIndicator = ({ level, lang }) => {
    return (
      <h1>{lang === "hu" ? `Szint: ${level}` : `Level: ${level}`}</h1>
    );
  }; 

  export default LevelIndicator