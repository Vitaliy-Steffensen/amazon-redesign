import React from "react";
import "./Cart.css";
import CartProduct from "./Components/CartProduct";
import { useCartContext } from "../../helpers/contexts/CartContext";
import Subtotal from "./Components/Subtotal";
import Header from "../../Components/Header";

const Cart = () => {
  const [{ cart }] = useCartContext();

  return (
    <>
      <Header />
      <div className="cart">
        <div className="cart__left">
          <div>
            <h2 className="cart__title">Your shopping cart</h2>
            {cart?.map((item, index) => (
              <CartProduct
                key={index}
                index={index}
                id={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="cart__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Cart;
