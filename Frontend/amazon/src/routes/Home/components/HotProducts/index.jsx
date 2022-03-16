import React, { useEffect, useState } from "react";
import APIService from "../../../../Services/APIServices";
import ProductCard from "../../../../Components/ProductCard";
import "./ProductsGrid.css";
import LoadingIndicator from "../../../../Components/LoadingIndicator";

export default function HotProducts() {
  const [hotProduct, setHotProduct] = useState([]);
  const [isLoading, seIsLoading] = useState(true);

  useEffect(() => {
    APIService.GetAllHotProducts()
      .then((resp) => {
        seIsLoading(false);
        setHotProduct(resp);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="hot-products">
      <h3 className="hot-product__title">Hot deals</h3>
      <a className="hot-product__link" href="/catalog">
        See all
      </a>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="hot-product__grid">
          {hotProduct?.map(({ product }, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}
