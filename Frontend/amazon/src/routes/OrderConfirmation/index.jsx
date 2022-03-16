import React, { useEffect, useState } from "react";
import FormattedPrice from "../../Components/FormattedPrice";
import Header from "../../Components/Header";
import history from "../../helpers/history";
import "./OrderConfirmation.css";
import CheckIcon from "@mui/icons-material/Check";
import { useCartContext } from "../../helpers/contexts/CartContext";

export default function OrderConfirmation() {
  const [orderDetails, setOrderDetails] = useState({
    cart: [
      { title: "Product 1", price: 500 },
      { title: "Product 2", price: 550 },
    ],
    currency: "gdp",
    invcoicingInformation: {
      firstname: "Vitaliy",
      lastname: "Steffensen",
      street: "Aarhusvej 35",
      postalCode: "8960",
      city: "Randers",
      email: "Randers@gmail.com",
      phone: "51911865",
    },
    total: 1500,
    date: new Date(),
  });
  const [_, dispatch] = useCartContext();

  useEffect(() => {
    dispatch({
      type: "CLEAR_CART",
    });
    setOrderDetails(history?.location?.state);
  }, []);
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <>
      <Header />
      <div className="order-confimation">
        <div className="order-confimation__container">
          <div className="order-confimation__border-bottom ">
            <h2 className="order-confimation__intro-text">
              Hey,{" "}
              <strong>{orderDetails.invcoicingInformation.firstname}</strong>
            </h2>
            <h2 className="order-confimation__confirmation-text">
              <CheckIcon />
              &nbsp;Your order is confirmed!
            </h2>
            <p>
              <br />
              Paid in {orderDetails.currency} using a credit card.
              <br />
              An email will be sent to{" "}
              <strong>{orderDetails.invcoicingInformation.email}</strong> once
              your order arrives.
            </p>
          </div>
          <div className="order-confimation__border-bottom ">
            <div className="order-confimation--grid-3">
              <di className="order-confimation__date">
                Ordered:{" "}
                <span>
                  {orderDetails.date.toLocaleDateString("en-US", DATE_OPTIONS)}
                </span>
              </di>
              <strong className="order-confimation--grid">
                <span>Total</span>
                <FormattedPrice
                  price={orderDetails.total}
                  className="order-confimation__product-price"
                />
              </strong>
            </div>
          </div>
          <div>
            {orderDetails.cart?.map((item, i) => (
              <div
                className="order-confimation__product order-confimation--grid"
                key={i}
              >
                <a
                  className="order-confimation__product-title"
                  href={`/product/${item?.id}`}
                >
                  {item.title}
                </a>
                <FormattedPrice
                  price={item.price}
                  className="order-confimation__product-price"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

//use price formatter for products
