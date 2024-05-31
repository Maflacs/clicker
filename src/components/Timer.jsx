import React from 'react';

const Timer = ({ lang, sec }) => {
    const formatTime = (seconds) => {
        let hours = Math.floor(seconds / 3600);
        let remainingSeconds = seconds % 3600;
        let minutes = Math.floor(remainingSeconds / 60);
        let remainingSecondsFinal = remainingSeconds % 60;

        let formattedTime = "";
        if (hours > 0) {
            formattedTime += hours + (lang === "hu" ? " óra " : " hour ");
        }
        if (minutes > 0) {
            formattedTime += minutes + (lang === "hu" ? " perc " : " minute ");
        }
        if (remainingSecondsFinal > 0) {
            formattedTime += remainingSecondsFinal + (lang === "hu" ? " másodperc " : " second ");
        }
        return formattedTime;
    };

    return (
        <div id="timer">
            <p><strong>{formatTime(sec)}</strong></p>
        </div>
    );
};

export default Timer;

