import React, { useEffect, useState } from "react";
import LoadingPageContent from "../../Components/LoadingPageContent";
import DefaultPageTemplate from "../../Components/Templates/DefaultPageTemplate";
import APIService from "../../Services/APIServices";
import CatalogFilter from "./CatalogFilter";
import "./Catalog.css";
import ProductCard from "../../Components/ProductCard";
import { useCatalogQueryParams } from "../../helpers/Hooks";
import { useCountryContext } from "../../helpers/contexts/CountryContext";
import { reverseFormatPrice } from "../../helpers/Constants";

export default function Catalog() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { category, minPrice, maxPrice } = useCatalogQueryParams();
  const [{ country }] = useCountryContext();

  useEffect(() => {
    APIService.GetAllPreviewProducts()
      .then((resp) => {
        setLoading(false);
        console.log("resp ", resp);
        return setProducts(resp);
      })
      .catch((e) => console.log(e));
  }, []);

  const filteredProducts = () =>
    products.filter(
      (product) =>
        !incorrectCategory(product.category) &&
        !underMinPrice(product.price) &&
        !overMaxPrice(product.price)
    );

  const incorrectCategory = (productCat) => category && productCat != category;

  const underMinPrice = (productPrice) =>
    minPrice && productPrice < reverseFormattedMinPrice;

  const overMaxPrice = (productPrice) =>
    maxPrice && productPrice > reverseFormattedMaxPrice;

  const reverseFormattedMinPrice = reverseFormatPrice(
    minPrice,
    country.currencyValue,
    country.vatRate
  );
  const reverseFormattedMaxPrice = reverseFormatPrice(
    maxPrice,
    country.currencyValue,
    country.vatRate
  );

  return (
    <DefaultPageTemplate>
      <div className="catalog">
        <CatalogFilter />
        {loading ? (
          <LoadingPageContent />
        ) : filteredProducts().length > 0 ? (
          <div className="catalog__products">
            {filteredProducts().map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
          </div>
        ) : (
          <div className="catalog__noProducts">
            No products matching your specifications
          </div>
        )}
      </div>
    </DefaultPageTemplate>
  );
}
