import React, { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, null);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
