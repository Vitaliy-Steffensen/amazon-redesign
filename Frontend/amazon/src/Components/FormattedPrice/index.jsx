import React from "react";
import { useCountryContext } from "../../helpers/contexts/CountryContext";

export default function FormattedPrice({ price, className }) {
  const [{ country }] = useCountryContext();

  const CurrencyBasedPrice = price * country.currencyValue;

  const taxedPrice =
    (CurrencyBasedPrice * country?.vatRate) / 100 + CurrencyBasedPrice;

  const seporatorFormat = (num) =>
    String(num)
      .replace(".", country.numberSeporators[1])
      .replace(/\B(?=(\d{3})+(?!\d))/g, country.numberSeporators[0]);

  const formattedPrice = seporatorFormat(taxedPrice.toFixed(2));

  return (
    <span className={className}>
      {country.currencyPreffixPosition === "before"
        ? `${country.countryCurrency}${formattedPrice}`
        : `${formattedPrice} ${country.countryCurrency}`}
    </span>
  );
}
