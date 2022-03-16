import React, { useEffect } from "react";
import { useCountryContext } from "../../helpers/contexts/CountryContext";
import Dropdown from "../Dropdowns";
import useCookie from "react-use-cookie";
import { countryOptions } from "../../helpers/Constants";

export default function CountryDropown() {
  const [{ country }, dispatch] = useCountryContext();
  const [countryToken, setCountryToken] = useCookie("country", "U.S.A.");

  useEffect(() => {
    country?.name !== countryToken &&
      dispatch({
        type: "SET_COUNTRY",
        country: countryOptions.find(
          (country) => country?.name === countryToken
        ),
      });
  }, []);

  const selectCountry = (selectedCountry) => {
    dispatch({
      type: "SET_COUNTRY",
      country: selectedCountry,
    });
    setCountryToken(selectedCountry.name);
  };

  return (
    <Dropdown
      placeholder={"Deliver to"}
      selected={country}
      setSelected={(val) => selectCountry(val)}
      options={countryOptions}
    />
  );
}
