import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "../reducers/cartReducer";

//Prepares the data layer
export const CartContext = createContext();

//Wrap our app and provide the data layer
export const CartContextProvider = ({ children }) => (
  <CartContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CartContext.Provider>
);

//Pull information from the data layer
export const useCartContext = () => useContext(CartContext);
