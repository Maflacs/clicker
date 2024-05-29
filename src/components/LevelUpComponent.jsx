import React, { useState } from "react";
import LevelUpButton from "./LevelUpButton";
import LevelIndicator from "./LevelIndicator";

const LevelUpComponent = ({
  modalOpen,
  setModalOpen,
  knowledge,
  onLevelUp,
}) => {
  const [level, setLevel] = useState(1);
  const baseCost = 1000000;

  const handleLevelUp = () => {
    const requiredPoints = calculateRequiredPoints(level);
    if (knowledge >= requiredPoints) {
      setLevel(level + 1);
      onLevelUp(requiredPoints);
    } else {
      setModalOpen(true);
    }
  };

  const calculateRequiredPoints = (level) => {
    return baseCost * 10 ** (level - 1);
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
