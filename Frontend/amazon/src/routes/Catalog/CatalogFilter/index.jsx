import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useCountryContext } from "../../../helpers/contexts/CountryContext";
import { useCatalogQueryParams } from "../../../helpers/Hooks";
import APIService from "../../../Services/APIServices";
import "./CatalogFilter.css";

export default function CatalogFilter() {
  const [categories, setCategories] = useState([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState([]);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState([]);
  const [{ country }] = useCountryContext();
  const { category, minPrice, maxPrice } = useCatalogQueryParams();
  const history = useHistory();

  let url = new URL(window.location.href);
  let params = new URLSearchParams(url.search);

  useEffect(() => {
    APIService.GetAllCategories()
      .then((resp) => {
        return setCategories(resp);
      })
      .catch((e) => console.log(e));
  }, []);

  const setCategory = (e) => {
    const selectedCategory = e.target.value;
    category == selectedCategory
      ? params.delete("category")
      : params.set("category", e.target.value);

    history.push({ search: params.toString() });
  };

  const setMinPrice = (e) => {
    setSelectedMinPrice(e.target.value);

    e.target.value == ""
      ? params.delete("minPrice")
      : params.set("minPrice", e.target.value);

    history.push({ search: params.toString() });
  };

  const setMaxPrice = (e) => {
    setSelectedMaxPrice(e.target.value);

    e.target.value == ""
      ? params.delete("maxPrice")
      : params.set("maxPrice", e.target.value);

    history.push({ search: params.toString() });
  };

  return (
    <div className="catalogFilter">
      <div className="catlogFilter__filterContainer">
        <h3 className="catlogFilter__filterTitle">Category</h3>
        {categories?.map((record, i) => (
          <button
            key={i}
            value={record.id}
            className={`catlogFilter__categoriesOption ${
              category && record.id == category && "catlogFilter--activeFilter"
            }`}
            onClick={setCategory}
          >
            {record.title}
          </button>
        ))}
      </div>
      <div className="catlogFilter__filterContainer">
        <h3 className="catlogFilter__filterTitle">Price</h3>
        <div className="catlogFilter__priceFilterInputsContainer">
          {country?.currencyPreffixPosition === "before" && (
            <span className="catlogFilter__priceFilterCurrency catlogFilter--marginRight">
              {country?.countryCurrency}
            </span>
          )}
          <input
            type="number"
            placeholder="Min"
            className="catlogFilter__priceFilterInput"
            value={selectedMinPrice}
            onChange={setMinPrice}
          />
          <span className="catlogFilter__priceFilterDivider">-</span>
          <input
            type="number"
            placeholder="Max"
            className="catlogFilter__priceFilterInput"
            value={selectedMaxPrice}
            onChange={setMaxPrice}
          />
          {country?.currencyPreffixPosition === "after" && (
            <span className="catlogFilter__priceFilterCurrency catlogFilter--marginLeft">
              {country?.countryCurrency}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
