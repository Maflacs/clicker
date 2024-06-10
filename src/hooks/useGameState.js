// Import the useState hook
import { useState, useEffect } from "react";
import { getInitialState } from "../utils/state";

// Custom hook for managing game state
export function useGameState() {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("gameState");
    return savedState ? JSON.parse(savedState) : getInitialState();
  });

  const administrateTime = () => {
    let currentTimestamp = new Date().getTime();
    let elapsedTime = Math.floor(
      (currentTimestamp - state.startTimestamp) / 1000
    );
    let rewardSeconds = elapsedTime - state.sec;
    if (rewardSeconds > 0) {
      setState((prevState) => ({
        ...prevState,
        knowledge:
          prevState.knowledge + prevState.knowledgePerSec * rewardSeconds,
        sec: elapsedTime,
      }));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(administrateTime, 200);
    return () => clearInterval(intervalId);
  }, [state]);

  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
