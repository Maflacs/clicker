import { createContext, useReducer } from "react";

export const LangContext = createContext();

const INITIAL_STATE = { lang: "hu"};

const langReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { lang: state.lang === "hu" ? "en" : "hu"  };

    default:
      return state;
  }
};

export const LangProvider = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, INITIAL_STATE);
  return (
    <LangContext.Provider value={{ state, dispatch }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;