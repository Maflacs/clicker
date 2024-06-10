// Import the useState hook
import { useState, useEffect } from "react";

// Custom hook for managing level state
export function useLevelState() {
  const [level, setLevel] = useState(() => {
    const savedLevel = localStorage.getItem("level");
    return savedLevel ? JSON.parse(savedLevel) : 1;
  });

  useEffect(() => {
    localStorage.setItem("level", JSON.stringify(level));
  }, [level]);


  return [level, setLevel];
}
