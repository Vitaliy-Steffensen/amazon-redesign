import React, { useEffect, useState } from "react";
import APIService from "../../../../Services/APIServices";
import ProductCard from "../../../../Components/ProductCard";
import "./ProductsGrid.css";

export default function HotProducts() {
  const [hotProduct, setHotProduct] = useState([]);

  useEffect(() => {
    APIService.GetAllHotProducts()
      .then((resp) => setHotProduct(resp))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="hot-products">
      <h3 className="hot-product__title">Hot deals</h3>
      <a className="hot-product__link" href="#ds">
        See all
      </a>
      <div className="hot-product__grid">
        {hotProduct?.map(({ product }, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
    </div>
  );
}
