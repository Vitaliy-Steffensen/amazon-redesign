import React from "react";
import CountryDropown from "../../../../Components/CountryDropdown";
import "./CheckoutForm.css";

export default function CheckoutForm({ formValues, setFormValues, errors }) {
  const onChange = (e) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  return (
    <form className="checkout-form__form">
      <ul className="checkout-form__list">
        <li className="checkout-form__list-item">
          <label>Country</label>
          <CountryDropown />
        </li>
        <li className="checkout-form__list-item checkout-form__grid-inputs">
          <div data-error={errors?.firstname ? "true" : "false"}>
            <label htmlFor="firstname">First name</label>
            <input
              id="firstname"
              name="firstname"
              placeholder="First name"
              value={formValues.firstname}
              onChange={onChange}
            />
          </div>
          <div data-error={errors?.lastname ? "true" : "false"}>
            <label htmlFor="lastname">Last name</label>
            <input
              id="lastname"
              name="lastname"
              placeholder="Last name"
              value={formValues.lastname}
              onChange={onChange}
            />
          </div>
        </li>
        <li
          className="checkout-form__list-item"
          data-error={errors?.street ? "true" : "false"}
        >
          <label htmlFor="billing_address_1">Street name and number</label>
          <input
            id="billing_address_1"
            name="street"
            placeholder="Street name and number"
            value={formValues.street}
            onChange={onChange}
          />
        </li>
        <li
          className="checkout-form__list-item"
          data-error={errors?.postalCode ? "true" : "false"}
        >
          <label htmlFor="postal-code">Postal code</label>
          <input
            id="postal-code"
            name="postalCode"
            placeholder="Postal code"
            type="number"
            value={formValues.postalCode}
            onChange={onChange}
          />
        </li>
        <li
          className="checkout-form__list-item"
          data-error={errors?.city ? "true" : "false"}
        >
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            placeholder="City"
            value={formValues.city}
            onChange={onChange}
          />
        </li>
        <li
          className="checkout-form__list-item"
          data-error={errors?.email ? "true" : "false"}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={onChange}
          />
        </li>
        <li
          className="checkout-form__list-item"
          data-error={errors?.name ? "true" : "false"}
        >
          <label htmlFor="phone">Phonenumber</label>
          <input
            id="phone"
            name="phone"
            placeholder="Phonenumber"
            value={formValues.phone}
            onChange={onChange}
          />
        </li>
      </ul>
    </form>
  );
}
