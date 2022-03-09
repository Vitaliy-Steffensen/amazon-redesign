import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useHistory } from "react-router-dom";
import FormattedPrice from "../FormattedPrice";
import "./ProductCard.css";

export default function ProductCard({ product, small }) {
  const history = useHistory();
  return (
    <div className="productCard">
      <div
        className={`productCard__wrapper ${
          small && "productCard--smallWrapper"
        }`}
        onClick={() => history.push(`/product/${product?.id}`)}
      >
        <img src={product?.thumbnail} alt="" className="productCard__image" />
        <span className="productCard__title">{product?.title}</span>
        {Array(product?.rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="productTitle__star" />
          ))}
        <FormattedPrice price={product?.price} className="productCard__price" />
      </div>
    </div>
  );
}
