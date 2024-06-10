import React from "react";
import xp from "../../assets/img/xp.png";
import pop from "../../assets/sounds/pop.wav";
import "./ClickArea.css";

const ClickArea = ({ onClick }) => {
  const sound = new Audio(pop);

  const handleImageClick = (e) => {
    sound.play();

    if (typeof onClick === "function") {
      onClick(e);
    }
  };
  return (
    <img
      draggable="false"
      src={xp}
      alt="klikkelő"
      data-enable_click="true"
      id="clickingArea"
      onClick={handleImageClick}
    />
  );
};

export default ClickArea;
