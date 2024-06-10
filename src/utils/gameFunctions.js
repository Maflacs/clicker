// Get class name based on dark mode
export const getClassName = (darkMode) => {
    return darkMode ? "bgDark" : "bgLight";
  };
  
  // Get container class name based on dark mode
  export const getClassNameContainer = (darkMode) => {
    return darkMode ? "bgDarkC" : "bgLightC";
  };
  
  // Handle knowledge click
  export const handleKnowledgeClicked = (setState) => {
    setState((prevState) => ({
      ...prevState,
      knowledge: prevState.knowledge + prevState.knowledgePerClick,
    }));
  };
  
  // Handle learning click
  export const handleLearningsClicked = (index, state, setState, setModalOpen) => {
    const clickedLearning = state.learnings[index];
    if (state.knowledge >= clickedLearning.price) {
      const newLearnings = [...state.learnings];
      newLearnings[index] = {
        ...newLearnings[index],
        amount: newLearnings[index].amount + 1,
        price: Math.floor(newLearnings[index].price * 1.1), // Increase price by 10%
      };
      if (newLearnings[index + 1]) {
        newLearnings[index + 1].unlocked = true;
      }
      setState((prevState) => ({
        ...prevState,
        knowledge: prevState.knowledge - clickedLearning.price,
        knowledgePerClick:
          prevState.knowledgePerClick + clickedLearning.knowledgePerClickIncrement,
        learnings: newLearnings,
      }));
    } else {
      setModalOpen(true);
    }
  };
  
  // Handle relation click
  export const handleRelationsClicked = (index, state, setState, setModalOpen) => {
    const clickedRelation = state.relations[index];
    if (state.knowledge >= clickedRelation.price) {
      const newRelations = [...state.relations];
      newRelations[index] = {
        ...newRelations[index],
        amount: newRelations[index].amount + 1,
        price: Math.floor(newRelations[index].price * 1.1), // Increase price by 10%
      };
      if (newRelations[index + 1]) {
        newRelations[index + 1].unlocked = true;
      }
      setState((prevState) => ({
        ...prevState,
        knowledge: prevState.knowledge - clickedRelation.price,
        knowledgePerSec:
          prevState.knowledgePerSec + clickedRelation.knowledgePerSecIncrement,
        relations: newRelations,
      }));
    } else {
      setModalOpen(true);
    }
  };
  
  // Close modal
  export const closeModal = (setModalOpen) => {
    setModalOpen(false);
  };
  
  // Handle game restart
  export const handleRestart = (setState, setLevel, getInitialState) => {
    const initialState = getInitialState();
    localStorage.setItem("gameState", JSON.stringify(initialState));
    localStorage.setItem("level", JSON.stringify(1));
    setState(initialState);
    setLevel(1);
  };
  
  // Handle level up
  export const handleLevelUp = (requiredPoints, setState, setLevel) => {
    setState((prevState) => ({
      ...prevState,
      knowledge: prevState.knowledge - requiredPoints,
    }));
    setLevel((prevLevel) => prevLevel + 1);
  };
  