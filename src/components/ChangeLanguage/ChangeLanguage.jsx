import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const ChangeLanguage= () => {
  const { state, dispatch } = useContext(LangContext);

  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle lang">
      <p className="en">en</p>
      <p className="hu">hu</p>
      <div
        className="button"
        onClick={handleClick}
        style={{ left: state.lang === "hu" ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default ChangeLanguage;