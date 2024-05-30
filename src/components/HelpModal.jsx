import React from "react";

const HelpModal = ({ color, onClose, lang }) => {
  return (
    <div className="help-modal">
      <div className={`help-modal-content ${color}`}>
        <button className="close" onClick={onClose}>
          &times;
        </button>
        {lang === "hu" ? (
          <div>
            <h2>Játék Szabályok</h2>
            <p>
              A játék célja, hogy minél több tudáspontot gyűjts. Kattints a
              középső területre tudáspontokért, vásárolj fejlesztéseket a
              tudáspontok növeléséhez, és fedezd fel a kapcsolatok erejét!
            </p>
          </div>
        ) : (
          <div>
            <h2>Game Rules</h2>
            <p>
              The goal of the game is to collect as many knowledge points as
              possible. Click the central area for knowledge points, buy
              upgrades to increase your points, and explore the power of
              relationships!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpModal;
