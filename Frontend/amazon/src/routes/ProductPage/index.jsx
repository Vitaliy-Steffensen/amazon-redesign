import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DefaultPageTemplate from "../../Components/Templates/DefaultPageTemplate";
import APIService from "../../Services/APIServices";
import ProductPageTitle from "./ProductPageTitle";
import "./ProductPage.css";
import ProductPageImages from "./ProductPageImages";
import ProductPagePriceCard from "./ProductPagePriceCard";
import LoadingPageContent from "../../Components/LoadingPageContent";
import { setPageTitle } from "../../helpers/Constants";
import ProductCard from "../../Components/ProductCard";

export default function ProductPage() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  var [product, setProduct] = useState(null);

  useEffect(() => {
    APIService.GetDetailedProductData(id)
      .then((resp) => {
        console.log("resp ", resp);
        setLoading(false);
        setPageTitle(resp.title);
        setProduct(resp);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <DefaultPageTemplate>
      {loading ? (
        <LoadingPageContent />
      ) : (
        <div className="productPage">
          <ProductPageTitle product={product} />
          <div className="productPage__infoContainer">
            <ProductPageImages product={product} />
            <ProductPagePriceCard product={product} />
          </div>
          <div className="productPage__descriptionContainer">
            <span className="productPage__sectionTitle">Description</span>
            <span className="productPage__description">
              {product?.description}
            </span>
          </div>
          <div className="productPage__sectionContainer">
            <h3 className="productPage__sectionTitle">Related Products</h3>
            <div className="productPage__relatedProducts">
              {product?.related_products.map((product) => (
                <ProductCard product={product} small={true} />
              ))}
            </div>
          </div>
        </div>
      )}
    </DefaultPageTemplate>
  );
}
