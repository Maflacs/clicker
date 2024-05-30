import React from "react";
import LevelUpButton from "./LevelUpButton";
import LevelIndicator from "./LevelIndicator";

const LevelUpComponent = ({
  knowledge,
  onLevelUp,
  level,
  modalOpen,
  setModalOpen,
}) => {
  const baseCost = 500000;

  const handleLevelUp = () => {
    const requiredPoints = calculateRequiredPoints(level);
    if (knowledge >= requiredPoints) {
      onLevelUp(requiredPoints);
    } else {
      setModalOpen(true);
    }
  };

  const calculateRequiredPoints = (level) => {
    return baseCost * 5 ** (level - 1);
  };

  const requiredPoints = calculateRequiredPoints(level);

  return (
    <div>
      <LevelIndicator level={level} />
      <LevelUpButton
        level={level}
        requiredPoints={requiredPoints}
        onClick={handleLevelUp}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        knowledge={knowledge}
        onLevelUp={onLevelUp}
      />
    </div>
  );
};

export default LevelUpComponent;
