import React from 'react';

const Timer = ({ sec }) => {
    return (
        <div id="timer">
            <p><strong>{sec} sec</strong></p>
        </div>
    );
};

export default Timer;
