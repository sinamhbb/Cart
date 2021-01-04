import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-us  eReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearItems = () => {
    dispatch({ type: "CLEARALL" });
  };

  const IncreaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const ReduceItem = (id) => {
    dispatch({ type: "REDUCE", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    console.log("1");
    dispatch({ type: "SUM" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItems,
        IncreaseItem,
        ReduceItem,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
