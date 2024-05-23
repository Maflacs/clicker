import React, { useContext } from "react";
import LangContext from "../context/LangContext";

const Learnings = ({ onClick }) => {
  const { state } = useContext(LangContext);
  const currentLang = state.lang === "hu" ? state.hu.learning : state.en.learning;

  return (
    <table className="skills-table">
      <tbody>
        {currentLang.map(
          (learning, index) =>
            learning.unlocked && (
              <tr key={index}>
                <td>
                  <p>
                    <strong>
                      {learning.learningName} (
                      {learning.knowledgePerClickIncrement} knowledge / click)
                    </strong>
                  </p>
                  <p>{learning.description}</p>
                </td>
                <td className="price">
                  <p>db: {learning.amount}</p>
                  <p>ár: {formatPrice(learning.price)}</p>
                </td>
                <td>
                  <img
                    draggable="false"
                    src={learning.link}
                    alt={learning.learningName}
                    data-index={index}
                    onClick={() => onClick(index)}
                  />
                </td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};

const formatPrice = (price) => {
  if (price < 1000) return price;
  let kValue = price / 1000;
  return `${kValue}K`;
};

export default Learnings;
