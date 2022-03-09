import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, image, rating }) => {
  const [state, dispatch] = useStateValue(useStateValue);

  console.log("this is the baket >>> ", state.cart);

  const addToCart = () => {
    //dispatch the item into the datalayer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
