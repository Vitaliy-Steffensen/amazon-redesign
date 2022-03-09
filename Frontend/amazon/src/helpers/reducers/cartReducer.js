export const initialState = {
  cart: [],
};

//Selector
export const getcartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let newcart = [...state.cart];
      newcart.splice(action.cartIndex, 1);

      return { ...state, cart: newcart };
    default:
      return state;
  }
};

export default reducer;
