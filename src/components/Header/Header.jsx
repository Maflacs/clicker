import React, { useContext, useEffect, useState } from "react";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import ChangeTheme from "../ChangeTheme/ChangeTheme";
import { ThemeContext } from "../../context/ThemeContext";
import { LangContext } from "../../context/LangContext";
import HelpModal from "../Modals/HelpModal/HelpModal";
import RestartModal from "../Modals/RestartModal/RestartModal";
import "./Header.css";

const Header = ({ color, onRestart }) => {
  const {
    state: { darkMode },
  } = useContext(ThemeContext);

  const {
    state: { lang },
  } = useContext(LangContext);

  const [isHelpModalOpen, setHelpModalOpen] = useState(false);
  const [isRestartModalOpen, setRestartModalOpen] = useState(false);

  const toggleHelpModal = () => {
    setHelpModalOpen(!isHelpModalOpen);
  };

  const toggleRestartModal = () => {
    setRestartModalOpen(!isRestartModalOpen);
  };

  const handleConfirmRestart = () => {
    onRestart();
    setRestartModalOpen(false);
  };

  useEffect(() => {}, [darkMode, lang]);

  return (
    <header>
      <div>
        <div className="rbtn">
          <button className="restart" onClick={toggleRestartModal}>
            {lang === "hu" ? "Újraindítás" : "Restart"}
          </button>
          <button className="help" onClick={toggleHelpModal}>
            ?
          </button>
        </div>
        <div>
          <ChangeLanguage />
          <ChangeTheme />
        </div>
        <div className="title">
          {lang === "hu" ? <h1>Varázslóiskola</h1> : <h1>Magic school</h1>}
        </div>
      </div>
      {isHelpModalOpen && <HelpModal color={color} onClose={toggleHelpModal} lang={lang} />}
      {isRestartModalOpen && (
        <RestartModal
          onClose={toggleRestartModal}
          onConfirm={handleConfirmRestart}
          lang={lang}
          color={color}
        />
      )}
    </header>
  );
};

export default Header;
