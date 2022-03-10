export default class APIService {
  /*   static GetAllProducts(body) {
    return fetch(`${process.env.REACT_APP_API_URL}/api/products/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  } */

  static GetAllCategories() {
    return fetch(`${process.env.REACT_APP_API_URL}/api/categories/`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }

  static GetAllSearchProducts() {
    return fetch(`${process.env.REACT_APP_API_URL}/api/search-products/`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .catch((error) => {
        console.log(
          "${process.env.REACT_APP_API_URL}/api/search-products/ ",
          `${process.env.REACT_APP_API_URL}/api/search-products/`
        );
        console.log(error);
      });
  }
  static GetAllPreviewProducts() {
    return fetch(`${process.env.REACT_APP_API_URL}/api/preview-products/`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }

  static GetDetailedProductData(id) {
    return fetch(
      `${process.env.REACT_APP_API_URL}/api/detailed-products/${id}/`,
      {
        method: "GET",
      }
    )
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }

  static GetAllHotProducts() {
    return fetch(`${process.env.REACT_APP_API_URL}/api/hot-products/`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }
}
