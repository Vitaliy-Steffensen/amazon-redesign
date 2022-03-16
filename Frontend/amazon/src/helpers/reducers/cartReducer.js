import { formatPrice } from "../Constants";

export const initialState = {
  cart: [],
};

//Selector
export const getcartTotal = (cart) =>
  cart.reduce((amount, item) => item.price + amount, 0);

export const getFormattedCartTotal = (cart, country) =>
  formatPrice(
    cart?.reduce((amount, item) => item.price + amount, 0),
    country
  );

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("action.item ", action.item);
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let newcart = [...state.cart];
      newcart.splice(action.cartIndex, 1);

      return { ...state, cart: newcart };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
