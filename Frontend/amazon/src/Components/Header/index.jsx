import React from "react";
import "./Header.css";
import Dropdown from "../Dropdowns";
import { useCountryContext } from "../../helpers/contexts/CountryContext";
import HeaderSearchBar from "./Components/HeaderSearchBar";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCartContext } from "../../helpers/contexts/CartContext";
import { countryOptions } from "../../helpers/Constants";
import logo from "../../Assets/images/icon black.png";

export default function Header() {
  const [{ cart }] = useCartContext();
  const [{ country }, dispatch] = useCountryContext();

  const selectCountry = (selectedCountry) => {
    console.log("selectedCountry ", { selectedCountry });
    dispatch({
      type: "SET_COUNTRY",
      country: selectedCountry,
    });
  };

  return (
    <div className="header">
      <div className="header__col justify--left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
        <Dropdown
          placeholder={"Deliver to"}
          selected={country}
          setSelected={(val) => selectCountry(val)}
          options={countryOptions}
        />
      </div>
      <div className="header__col justify--center">
        <HeaderSearchBar />
      </div>
      <div className="header__col justify--right">
        <Link className="header__signIn" to="/login">
          Sign in
        </Link>
        <Link className="header__cartContainer" to="/cart">
          <ShoppingCartOutlinedIcon sx={{ fontSize: "70", color: "#232F3E" }} />
          {cart?.length > 0 && (
            <div className="header__cartCount">{cart?.length}</div>
          )}
        </Link>
      </div>
    </div>
  );
}
