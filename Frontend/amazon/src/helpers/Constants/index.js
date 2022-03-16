import { useCountryContext } from "../contexts/CountryContext";

export const countryOptions = [
  {
    name: "U.S.A.",
    countryCurrency: "$",
    currencyPreffixPosition: "before",
    currencyValue: 1,
    vatRate: 10,
    numberSeporators: [",", "."],
    daysToDeliver: 1,
    currency: "usd",
  },
  {
    name: "Great Britain",
    countryCurrency: "£",
    currencyPreffixPosition: "before",
    currencyValue: 0.74,
    vatRate: 20,
    numberSeporators: [",", "."],
    daysToDeliver: 5,
    currency: "gbp",
  },
  {
    name: "Germany",
    countryCurrency: "€",
    currencyPreffixPosition: "after",
    currencyValue: 0.88,
    vatRate: 19,
    numberSeporators: [".", ","],
    daysToDeliver: 6,
    currency: "eur",
  },
  {
    name: "Denmark",
    countryCurrency: "kr",
    currencyPreffixPosition: "after",
    currencyValue: 6.51,
    vatRate: 25,
    numberSeporators: [" ", ","],
    daysToDeliver: 10,
    currency: "dkk",
  },
];

export const setPageTitle = (title) =>
  (document.getElementsByTagName("title")[0].innerText = title);

export const reverseFormatPrice = (formattedPrice, currencyValue, vatRate) => {
  const priceWithoutTax = formattedPrice / (1 + vatRate / 100);
  const priceWithoutAddedCurrencyValue = priceWithoutTax / currencyValue;
  return priceWithoutAddedCurrencyValue.toFixed(3);
};

export const formatPrice = (price, country) => {
  const CurrencyBasedPrice = price * country.currencyValue;

  const taxedPrice =
    (CurrencyBasedPrice * country?.vatRate) / 100 + CurrencyBasedPrice;

  return taxedPrice.toFixed(2);
};
