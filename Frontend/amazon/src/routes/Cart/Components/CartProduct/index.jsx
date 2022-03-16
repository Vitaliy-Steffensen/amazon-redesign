import React from "react";
import "./CartProduct.css";
import { useCartContext } from "../../../../helpers/contexts/CartContext";
import FormattedPrice from "../../../../Components/FormattedPrice";
import StarIcon from "@mui/icons-material/Star";

function CartProduct({ index, id, thumbnail, title, price, rating }) {
  const [, dispatch] = useCartContext();

  const removeFromcart = () =>
    dispatch({
      type: "REMOVE_FROM_CART",
      cartIndex: index,
    });

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={thumbnail} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <FormattedPrice className="checkoutProduct__price" price={price} />
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="productTitle__star" key={i} />
            ))}
        </div>
        <button onClick={removeFromcart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CartProduct;
