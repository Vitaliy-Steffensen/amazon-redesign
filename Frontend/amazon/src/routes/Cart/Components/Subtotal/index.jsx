//import Shoppingcart from "@mui/icons-material/Shoppingcart";
import React from "react";
import "./Subtotal.css";
import { useCartContext } from "../../../../helpers/contexts/CartContext";
import { getcartTotal } from "../../../../helpers/reducers/cartReducer";
import FormattedPrice from "../../../../Components/FormattedPrice";

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
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
