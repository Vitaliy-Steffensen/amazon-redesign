import React from "react";
import "./ProductPageTitle.css";
import StarIcon from "@mui/icons-material/Star";

export default function ProductPageTitle({ product }) {
  return (
    <div className="productTitle">
      <h1 className="productTitle__title">{product?.title}</h1>
      <div className="productTitle__details">
        <span className="productTitle__skuTitle">Item number:</span>
        <span className="productTitle__sku">{product?.sku}</span>
        <div className="productTitle__rating">
          {Array(product?.rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="productTitle__star" />
            ))}
        </div>
      </div>
    </div>
  );
}
