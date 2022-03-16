import React, { useState } from "react";
import "./StripePopup.css";
import CloseIcon from "@mui/icons-material/Close";

export default function StripePopup() {
  const [closed, setClosed] = useState(false);
  return (
    <>
      {closed || (
        <div className="stripe-popup">
          <button
            className="stripe-popup__close"
            onClick={(e) => setClosed(true)}
          >
            <CloseIcon />
          </button>
          Stripe test mode is enabled and you may use{" "}
          <a
            className="stripe-popup__link"
            href="https://stripe.com/docs/testing"
          >
            Stripe test cards
          </a>{" "}
          to place an order.
        </div>
      )}
    </>
  );
}
