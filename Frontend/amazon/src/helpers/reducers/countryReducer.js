export const initialState = {
  country: {
    name: "",
    countryCurrency: "$",
    currencyPreffixPosition: "before",
    currencyValue: 1,
    vatRate: 10,
    numberSeporators: [",", "."],
    currency: "usd",
  },
};

const countryReducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return {
        country: action.country,
      };
    default:
      return state;
  }
};

export default countryReducer;
