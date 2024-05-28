import React, { useContext } from "react";
import LangContext from "../context/LangContext";

const Modal = ({ color, message, onClose }) => {

  const {
    state: { lang },
  } = useContext(LangContext);

  return (
    <div className="modal">
      <div className={`modal-content ${color}`}>
        <p>{message}</p>
        <button className="mBtn" onClick={onClose}>{lang === "hu" ? "Bezárás" : "Close"}</button>
      </div>
    </div>
  );
};

export default Modal;
