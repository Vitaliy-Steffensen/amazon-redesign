import React, { useEffect } from "react";
import "./Header.css";
import HeaderSearchBar from "./Components/HeaderSearchBar";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCartContext } from "../../helpers/contexts/CartContext";
import logo from "../../Assets/images/icon black.png";
import CountryDropown from "../CountryDropdown";

export default function Header() {
  const [{ cart }] = useCartContext();

  return (
    <div className="header">
      <div className="header__col justify--left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
        <CountryDropown />
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
