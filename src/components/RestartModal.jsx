import React from "react";

const RestartModal = ({ color, onClose, onConfirm, lang }) => {
  return (
    <div className="restart-modal">
      <div className={`restart-modal-content ${color}`}>
        <p>
          {lang === "hu"
            ? "Minden eddig elért eredményed nullázódni fog. Biztos, hogy újraindítod a játékot?"
            : "All your progress so far will be reset. Are you sure you want to restart the game?"}
        </p>
        <button className="confirm" onClick={onConfirm}>
          {lang === "hu" ? "Igen" : "Yes"}
        </button>
        <button className="cancel" onClick={onClose}>
          {lang === "hu" ? "Mégsem" : "No"}
        </button>
      </div>
    </div>
  );
};

export default RestartModal;
