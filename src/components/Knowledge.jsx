import React, { useContext } from "react";
import LangContext from "../context/LangContext";

const Knowledge = ({ state }) => {
    const { state: stateLang } = useContext(LangContext); 
    const currentLang = stateLang.lang;

  return (
    <div id="knowledge-area">
      {currentLang === "hu" ? (
        <div>
          <p>
            <strong>{state.knowledge} tudáspont</strong>
          </p>
          <p>{state.knowledgePerClick} tudáspont / click</p>
          <p>{state.knowledgePerSec} tudáspont / sec</p>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <p>
            <strong>{state.knowledge} knowledge</strong>
          </p>
          <p>{state.knowledgePerClick} knowledge / click</p>
          <p>{state.knowledgePerSec} knowledge / sec</p>{" "}
        </div>
      )}
    </div>
  );
};

export default Knowledge;
