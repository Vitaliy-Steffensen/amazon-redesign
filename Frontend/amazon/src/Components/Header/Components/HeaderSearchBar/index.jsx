import React, { useState, useEffect, useRef } from "react";
import "./HeaderSearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import APIService from "../../../../Services/APIServices";
import history from "../../../../helpers/history";
import LoadingIndicator from "../../../LoadingIndicator";

export default function HeaderSearchBar() {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  let menuRef = useRef();
  var [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    APIService.GetAllSearchProducts()
      .then((resp) => {
        setIsLoading(false);
        setProducts(resp);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (isActive && !menuRef?.current?.contains(event.target)) {
        setIsActive(false);
      } else if (!isActive && menuRef?.current?.contains(event.target)) {
        setIsActive(true);
      }
    });
  }, [isActive]);

  const productsMatchingSearchTerm = products?.filter(
    (product) =>
      product?.title === "" ||
      product?.title
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="headerSearch" ref={menuRef}>
      <div className="headerSearch__inputBar">
        <SearchIcon className="headerSearch__icon" />
        <input
          className="headerSearch__inputField"
          type="text"
          placeholder="What are you looking for?"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          className="headerSearch__allButton"
          onClick={() => history.push("/catalog")}
        >
          ALL
        </button>
      </div>
      {isActive && (
        <div className="headerSearch__content">
          {isLoading ? (
            <LoadingIndicator />
          ) : productsMatchingSearchTerm.length > 0 ? (
            productsMatchingSearchTerm.map(
              (product, key) =>
                key < 5 && (
                  <div
                    key={key}
                    className="headerSearch__item"
                    onClick={() => {
                      setIsActive(false);
                      history.push(`/product/${product?.id}`);
                    }}
                  >
                    <img
                      className="headerSearch__resultImage"
                      src={product?.thumbnail}
                      alt=""
                    />
                    {product?.title}
                  </div>
                )
            )
          ) : (
            <>
              <span>Nothing Matches Your Search </span>
              <br />
              <small>
                But don't give up – check the spelling or try less specific
                search terms.
              </small>
            </>
          )}
        </div>
      )}
    </div>
  );
}
