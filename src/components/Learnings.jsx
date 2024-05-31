import React from "react";
import magic from "../sounds/magic-spell.wav";

const Learnings = ({ lang, color, learnings, knowledge, onClick, setModalOpen }) => {

  const playSound = () => {
    const sound = new Audio(magic);
    sound.play();
  };

  return (
    <table className={`skills-table ${color}`}>
      <tbody>
        {learnings.map(
          (learning, index) =>
            learning.unlocked && (
              <tr key={index}>
                <td className="desc">
                  {lang === "hu" ? (
                    <p>
                      <strong>
                        {learning.learningName[lang]} (
                        {learning.knowledgePerClickIncrement} tudáspont / click)
                      </strong>
                    </p>
                  ) : (
                    <p>
                      <strong>
                        {learning.learningName[lang]} (
                        {learning.knowledgePerClickIncrement} knowledge / click)
                      </strong>
                    </p>
                  )}
                  <p>{learning.description[lang]}</p>
                </td>
                {lang === "hu" ? (
                  <td className="price">
                    <p>db: {learning.amount}</p>
                    <p>ár: {formatPrice(learning.price)}</p>
                  </td>
                ) : (
                  <td className="price">
                    <p>pcs: {learning.amount}</p>
                    <p>price: {formatPrice(learning.price)}</p>
                  </td>
                )}
                <td>
                  <img
                    draggable="false"
                    src={learning.link}
                    alt={learning.learningName[lang]}
                    data-index={index}
                    onClick={() => { if (knowledge >= learning.price) {
                      playSound();
                      onClick(index);
                    } else {
                      setModalOpen(true);
                    }
                    }}
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
  let kValue = Math.ceil(price / 1000);
  return `${kValue}K`;
};

export default Learnings;
