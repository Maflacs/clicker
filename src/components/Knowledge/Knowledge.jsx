import React from "react";


const Knowledge = ({ state, lang }) => {

  const knowledge = state.knowledge;

  const formatKnowledge = (knowledge) => {
    if (knowledge < 1000) return knowledge;
    let kValue = Math.floor(knowledge / 1000);
    return `${kValue}K`;
  };

  return (
    <div id="knowledge-area">
      {lang === "hu" ? (
        <div>
          <p>
            <strong>{formatKnowledge(knowledge)} tudáspont</strong>
          </p>
          <p>{state.knowledgePerClick} tudáspont / click</p>
          <p>{state.knowledgePerSec} tudáspont / sec</p>
        </div>
      ) : (
        <div>
          <p>
            <strong>{formatKnowledge(knowledge)} knowledge</strong>
          </p>
          <p>{state.knowledgePerClick} knowledge / click</p>
          <p>{state.knowledgePerSec} knowledge / sec</p>
        </div>
      )}
    </div>
  );
};



export default Knowledge;
