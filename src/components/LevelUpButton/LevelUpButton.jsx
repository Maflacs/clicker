import React, { useContext } from "react";
import LangContext from "../../context/LangContext";
import levelUp from "../../assets/sounds/achievement.wav";

const LevelUpButton = ({
  knowledge,
  requiredPoints,
  onClick,
  setModalOpen,
}) => {
  const {
    state: { lang },
  } = useContext(LangContext);

  const sound = new Audio(levelUp);

  const playSound = () => {
    sound.play()
  };

  const handleClick = () => {
    if (knowledge >= requiredPoints) {
      playSound();
      onClick();
    } else {
      setModalOpen(true);
    }
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
  let kValue = Math.ceil(requiredPoints / 1000);
  return `${kValue}K`;
};
export default LevelUpButton;
