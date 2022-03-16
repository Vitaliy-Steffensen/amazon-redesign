//import Shoppingcart from "@mui/icons-material/Shoppingcart";
import React from "react";
import "./Subtotal.css";
import { useCartContext } from "../../../../helpers/contexts/CartContext";
import { getcartTotal } from "../../../../helpers/reducers/cartReducer";
import FormattedPrice from "../../../../Components/FormattedPrice";
import history from "../../../../helpers/history";

const Subtotal = () => {
  const [{ cart }] = useCartContext();

  return (
    <div className="subtotal">
      <span>
        Subtotal ({cart.length} items):&nbsp;
        <strong>
          <FormattedPrice price={getcartTotal(cart)} />
        </strong>
      </span>
      <button
        onClick={() => history.push("/checkout")}
        disabled={cart.length < 1}
      >
        {cart.length < 1 ? "Cart is emptry" : "Proceed to Checkout"}
      </button>
    </div>
  );
};

export default Subtotal;
