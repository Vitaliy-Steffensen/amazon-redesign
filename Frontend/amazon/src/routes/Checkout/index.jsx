import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCartContext } from "../../helpers/contexts/CartContext";
import FormattedPrice from "../../Components/FormattedPrice";
import {
  getcartTotal,
  getFormattedCartTotal,
} from "../../helpers/reducers/cartReducer";
import APIService from "../../Services/APIServices";
import { useCountryContext } from "../../helpers/contexts/CountryContext";
import history from "../../helpers/history";
import Header from "../../Components/Header";
import CheckoutForm from "./components/CheckoutForm";
import {
  initialCheckoutValues,
  invalidCheckOutValues,
} from "../../Utils/validations/checkoutValidation";

const Checkout = () => {
  const [succeeded, setSucceedeed] = useState(false);
  const [processing, setProcessing] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [cardErrors, setCardErrors] = useState(
    "Please insert your card details"
  );
  const [clientSecret, setClientSecret] = useState(true);
  const [formValues, setFormValues] = useState(initialCheckoutValues);

  const [{ cart }] = useCartContext();
  const [{ country }] = useCountryContext();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await APIService.CreatePayment({
        total: getFormattedCartTotal(cart, country) * 100,
        currency: country.currency,
        email: "testdssdfsasf@mailinator.com",
      });
      setClientSecret(response.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    let invalidInput = invalidCheckOutValues(formValues);

    if (invalidInput || cardErrors) {
      setFormErrors({ ...invalidInput, card: cardErrors });
      return setProcessing(false);
    }

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(() => {
        setSucceedeed(true);
        setFormErrors(null);
        setProcessing(false);
        history.replace(
          {
            pathname: "/order-confirmation",
          },
          {
            cart,
            total: getcartTotal(cart),
            currency: country.currency,
            invcoicingInformation: formValues,
            date: new Date(),
          }
        );
      });
  };

  const cardChange = (e) => {
    setCardErrors(e.error ? e.error.message : "");
  };

  return (
    <>
      <Header />
      <div className="checkout">
        <h1 className="checkout__title">
          Checkout&nbsp;
          <small>
            ( <Link to="/cart">{cart?.length} items</Link> )
          </small>
        </h1>
        <div className="checkout__grid">
          <div className="checkout__grid-element">
            <h2 className="checkout__column-title">Invoicing information</h2>
            <CheckoutForm
              formValues={formValues}
              setFormValues={setFormValues}
              errors={formErrors}
            />
          </div>

          <div className="checkout__grid-element">
            <h2 className="checkout__column-title">Your Order</h2>
            <div className="checkout__order-container">
              <div className="checkout--two-column-container">
                <strong>Item</strong>
                <strong className="checkout__order-title-price">Price</strong>
              </div>
              {cart?.map((item, i) => (
                <div
                  className="checkout__order-item checkout--two-column-container"
                  key={i}
                >
                  <p>{item.title}</p>
                  <FormattedPrice
                    className="checkout__order-item-price"
                    price={item.price}
                  />
                </div>
              ))}
              <div className="checkout--two-column-container">
                <strong>Total</strong>
                <FormattedPrice
                  className="checkout__price"
                  price={getcartTotal(cart)}
                />
              </div>
            </div>

            <div className="checkout__submit-container">
              <CardElement onChange={cardChange} />
              <button
                className="checkout__submit-btn"
                disabled={processing || succeeded}
                onClick={handleSubmit}
              >
                <span>{processing ? "Processing" : "Buy Now"}</span>
              </button>
              {formErrors && (
                <div className="checkout__error">
                  {formErrors[Object.keys(formErrors)[0]]}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
