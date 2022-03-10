import React, { useEffect, useState } from "react";
import APIService from "../../../../Services/APIServices";
import "./CategoryGrid.css";

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    APIService.GetAllCategories()
      .then((resp) => setCategories(resp))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="category-grid">
      {categories?.map((category, i) => (
        <a
          href={`/catalog?category=${category.id}`}
          className="category-grid__card"
          key={i}
        >
          <img
            className="category-grid__card-image"
            src={category.image}
            alt=""
          />
          <div className="category-grid__card-title">{category.title}</div>
        </a>
      ))}
    </div>
  );
};

export default CategoryGrid;
