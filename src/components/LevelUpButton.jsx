import React, { useContext } from "react";
import LangContext from "../context/LangContext";
import levelUp from "../sounds/achievement.wav";

const LevelUpButton = ({
  level,
  knowledge,
  requiredPoints,
  onClick,
  setModalOpen,
}) => {
  const {
    state: { lang },
  } = useContext(LangContext);

  const sound = new Audio(levelUp);

  const handleClick = (index) => {
    sound.play();
    onClick(index); 
  };

  return (
    <button className="levelUp" onClick={handleClick}>
      {lang === "hu"
        ? `Szintlépés ${formatPrice(requiredPoints)} tudáspontért`
        : `Level up for ${formatPrice(requiredPoints)} knowledge`}
    </button>
  );
};

const formatPrice = (requiredPoints) => {
  if (requiredPoints < 1000) return requiredPoints;
  let kValue = requiredPoints / 1000;
  return `${kValue}K`;
};

export default LevelUpButton;
