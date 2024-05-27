import React, { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Knowledge from './components/Knowledge';
import ClickArea from './components/ClickArea';
import Learnings from './components/Learnings';
import Relations from './components/Relations';
import { getInitialState } from './utils/state';
import LangContext from './context/LangContext';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem('gameState');
    return savedState ? JSON.parse(savedState) : getInitialState();
  });

  const { state: { lang } } = useContext(LangContext);

  const {
    state: { darkMode },
  } = useContext(ThemeContext);

  const getClassName = () => {
     return darkMode ? "bgDark" : "bgLight"
  };

  const getClassNameContainer = () => {
    return darkMode ? "bgDarkC" : "bgLightC"
 };

  useEffect(() => {
    const intervalId = setInterval(administrateTime, 200);
    return () => clearInterval(intervalId);
  }, [state]);

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(state));
  }, [state]);

  const administrateTime = () => {
    let currentTimestamp = new Date().getTime();
    let elapsedTime = Math.floor((currentTimestamp - state.startTimestamp) / 1000);
    let rewardSeconds = elapsedTime - state.sec;
    if (rewardSeconds > 0) {
      setState((prevState) => ({
        ...prevState,
        knowledge: prevState.knowledge + prevState.knowledgePerSec * rewardSeconds,
        sec: elapsedTime
      }));
    }
  };

  const handleKnowledgeClicked = () => {
    setState((prevState) => ({
      ...prevState,
      knowledge: prevState.knowledge + prevState.knowledgePerClick
    }));
  };

  const handleLearningsClicked = (index) => {
    const clickedLearning = state.learnings[index];
    if (state.knowledge >= clickedLearning.price) {
      const newLearnings = [...state.learnings];
      newLearnings[index] = {
        ...newLearnings[index],
        amount: newLearnings[index].amount + 1,
        price: Math.floor(newLearnings[index].price * 1.1) // Increase price by 10%
      };
      if (newLearnings[index + 1]) {
        newLearnings[index + 1].unlocked = true;
      }
      setState((prevState) => ({
        ...prevState,
        knowledge: prevState.knowledge - clickedLearning.price,
        knowledgePerClick: prevState.knowledgePerClick + clickedLearning.knowledgePerClickIncrement,
        learnings: newLearnings
      }));
    } else {
        
      alert(lang === "hu" ? "Nem áll rendelkezésedre elég tudáspont!" : "You don't have enough knowledge points!");
    }
  };

  const handleRelationsClicked = (index) => {
    const clickedRelation = state.relations[index];
    if (state.knowledge >= clickedRelation.price) {
      const newRelations = [...state.relations];
      newRelations[index] = {
        ...newRelations[index],
        amount: newRelations[index].amount + 1,
        price: Math.floor(newRelations[index].price * 1.1) // Increase price by 10%
      };
      if (newRelations[index + 1]) {
        newRelations[index + 1].unlocked = true;
      }
      setState((prevState) => ({
        ...prevState,
        knowledge: prevState.knowledge - clickedRelation.price,
        knowledgePerSec: prevState.knowledgePerSec + clickedRelation.knowledgePerSecIncrement,
        relations: newRelations
      }));
    } else {
        alert(lang === "hu" ? "Nem áll rendelkezésedre elég tudáspont!" : "You don't have enough knowledge points!");
    }
  };

  const handleRestart = () => {
    const initialState = getInitialState();
    localStorage.setItem("gameState", JSON.stringify(initialState));
    setState(initialState);
  };

  return (
    <div className={getClassName()}>
      <Header color={getClassNameContainer()} onRestart={handleRestart} />
      <main className="main-container">
        <section className="inventory-container per-click">
          <Learnings color={getClassNameContainer()} learnings={state.learnings} onClick={handleLearningsClicked} />
        </section>
        <section className="clicking-area-container xp">
          <Timer sec={state.sec} />
          <ClickArea onClick={handleKnowledgeClicked} />
          <Knowledge state={state} />
        </section>
        <section className="inventory-container per-sec">
          <Relations color={getClassNameContainer()} relations={state.relations} onClick={handleRelationsClicked} />
        </section>
      </main>
    </div>
  );
}

export default App;
