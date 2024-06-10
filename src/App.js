import React, { useContext } from "react";
import Header from "./components/Header/Header";
import { getInitialState } from "./utils/state";
import LangContext from "./context/LangContext";
import { ThemeContext } from "./context/ThemeContext";
import { useGameState } from "./hooks/useGameState";
import { useLevelState } from "./hooks/useLevelState";
import { useModalState } from "./hooks/useModalState";
import {
  getClassName,
  getClassNameContainer,
  handleRestart,
} from "./utils/gameFunctions";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  const [state, setState] = useGameState();
  const [level, setLevel] = useLevelState();
  const [modalOpen, setModalOpen] = useModalState();

  const {
    state: { lang },
  } = useContext(LangContext);

  const {
    state: { darkMode },
  } = useContext(ThemeContext);

  return (
    <div className={getClassName(darkMode)}>
      <Header
        color={getClassNameContainer(darkMode)}
        setModalOpen={setModalOpen}
        onRestart={() => handleRestart(setState, setLevel, getInitialState)}
        knowledge={state.knowledge}
      />
      <Main
        setModalOpen={setModalOpen}
        knowledge={state.knowledge}
        color={getClassNameContainer(darkMode)}
        lang={lang}
        learnings={state.learnings}
        level={level}
        setLevel={setLevel}
        modalOpen={modalOpen}
        sec={state.sec}
        state={state}
        setState={setState}
        relations={state.relations}
      />
    </div>
  );
}

export default App;
