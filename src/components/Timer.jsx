import React from 'react';

const Timer = ({ lang, sec }) => {
    return (
        <div id="timer">
            <p><strong>{sec} {lang === "hu" ? "másodperc(mp)" : "secundum(sec)"}</strong></p>
        </div>
    );
};

export default Timer;
