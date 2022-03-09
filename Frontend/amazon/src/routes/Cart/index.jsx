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
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div>
            <h2 className="checkout__title">Your shopping cart</h2>
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
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Cart;
