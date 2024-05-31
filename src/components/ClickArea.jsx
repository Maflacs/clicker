import React from 'react';
import xp from "../img/xp.png"
import pop from "../sounds/pop.wav";

const ClickArea = ({ onClick }) => {
    const sound = new Audio(pop);

    const handleImageClick = (e) => {
    
        sound.play();

        if (typeof onClick === 'function') {
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
