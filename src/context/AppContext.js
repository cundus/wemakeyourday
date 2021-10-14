import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  isLogin: false,
  user: "",
  update: false,
};

const reducer = async (state, action) => {
  switch (action.type) {
    case "LOGIN":
      await AsyncStorage.getItem("user");
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };

    case "REGISTER":
      await AsyncStorage.setItem("user", action.payload);
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };

    case "UPDATE":
      return {
        ...state,
        update: !state.update,
      };

    default:
      throw new Error("unknown cases");
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
