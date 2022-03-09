import React from "react";
import { useState } from "react";
import "./ProductPageImages.css";

export default function ProductPageImages({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="productPageImages">
      <div className="productPageImages__imageOptionContainer">
        {product?.images?.map((image, index) => (
          <img
            onClick={() => setSelectedImage(index)}
            className={`productPageImages__imageOption ${
              selectedImage === index && "productPageImages__selectedImage"
            }`}
            src={image?.image}
            alt=""
          />
        ))}
      </div>
      <div className="productPageImages__imageDisplayContainer">
        <img
          className="productPageImages__imageDisplay"
          src={product?.images[selectedImage]?.image}
          alt=""
        />
      </div>
    </div>
  );
}
