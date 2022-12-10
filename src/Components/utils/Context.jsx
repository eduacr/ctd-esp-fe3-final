import { useEffect, useReducer, useState, useMemo } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { actions, reducer } from "./reducer";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // const [data, setData] = useState()
  const [state, dispatch] = useReducer(reducer, initialState)

  const providerState = useMemo(
    () => ({
      theme: state.theme,
      data: state.data,
      setDarkTheme: () => dispatch({type: actions.setDarkTheme}),
      setLightTheme: () => dispatch({type: actions.setLightTheme}),
      setData: (payload) => dispatch({type: actions.setData, payload})    
    }), [state.data, state.theme]
  )

  // useEffect(() => {})
    

return (
    <ContextGlobal.Provider value={{providerState}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
 export const useContextGlobal = () => {
  return useContext(ContextGlobal)
 }
