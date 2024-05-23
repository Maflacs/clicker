import React from 'react';
import xp from "../img/xp.png"

const ClickArea = ({ onClick }) => {
    return (
        <img
            draggable="false"
            src={xp}
            alt="klikkelő"
            data-enable_click="true"
            id="clickingArea"
            onClick={onClick}
        />
    );
};

export default ClickArea;
