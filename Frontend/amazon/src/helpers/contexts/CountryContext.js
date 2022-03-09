import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "../reducers/countryReducer";
import reducer from "../reducers/countryReducer";

export const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => (
  <CountryContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CountryContext.Provider>
);

export const useCountryContext = () => useContext(CountryContext);
