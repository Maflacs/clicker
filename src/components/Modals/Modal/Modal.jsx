import React from "react";
import "./Modal.css";

  
const Modal = ({ color, lang, onClose }) => {

  return (
    <div className="modal">
      <div className={`modal-content ${color}`}>
        <p>{lang === "hu"
                ? "Nem áll rendelkezésedre elég tudáspont!"
                : "You don't have enough knowledge points!"}</p>
        <button className="mBtn" onClick={onClose}>{lang === "hu" ? "Bezárás" : "Close"}</button>
      </div>
    </div>
  );
};

export default Modal;
