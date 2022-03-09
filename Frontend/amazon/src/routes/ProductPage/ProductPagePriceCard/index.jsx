import React, { useState } from "react";
import FormattedPrice from "../../../Components/FormattedPrice";
import { useCartContext } from "../../../helpers/contexts/CartContext";
import { useCountryContext } from "../../../helpers/contexts/CountryContext";
import "./productPagePriceCard.css";
import { storeScroll } from "../../../helpers/StoreScrollPosition";

export default function ProductPagePriceCard({ product }) {
  const [justAddToCart, setJustAddToCart] = useState(false);
  const [{ country }] = useCountryContext();
  const [, dispatch] = useCartContext();

  const addToCart = () => {
    setJustAddToCart(true);
    setTimeout(() => {
      setJustAddToCart(false);
    }, 1000);

    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        rating: product.rating,
      },
    });
  };

  storeScroll();

  return (
    <div className="productPagePriceCard">
      <div className="productPagePriceCard__container">
        <FormattedPrice
          className="productPagePriceCard__price"
          price={product?.price}
        />
        <span className="productPagePriceCard__title">About the product</span>
        {product?.features?.map((feature) => (
          <span className="productPagePriceCard__subtitle">
            {feature.title}
          </span>
        ))}
      </div>
      <div className="productPagePriceCard__deliveryContainer">
        <span className="productPagePriceCard__title">Delivery</span>
        <span className="productPagePriceCard__subtitle">
          {country?.daysToDeliver
            ? `can be delivered to denmark in about ${country.daysToDeliver} days`
            : "Select a destination, to get the expected delivery"}
        </span>
        {product?.stock > 0 ? (
          <button
            className={`productPagePriceCard__cta ${
              justAddToCart && "productPagePriceCard__ctaActive"
            }`}
            onClick={addToCart}
          >
            {justAddToCart ? "ADDED TO CART" : "ADD TO CART"}
          </button>
        ) : (
          <button
            className="productPagePriceCard__cta productPagePriceCard__disabledCta"
            disabled={true}
          >
            OUT OF STOCK
          </button>
        )}
      </div>
    </div>
  );
}
