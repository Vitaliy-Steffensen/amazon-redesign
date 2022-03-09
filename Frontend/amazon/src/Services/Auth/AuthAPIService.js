export default class APIService {
  // static LoginUser(body) {
  //   return fetch("http://127.0.0.1:8000/auth/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((resp) => resp.json())
  //     .catch((error) => console.log(error));
  // }
  static LoginUser(body) {
    return fetch(`${process.env.REACT_APP_API_URL}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => console.log(resp))
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }

  static GetUserInformation(id, body, userToken) {
    return fetch(`${process.env.REACT_APP_API_URL}/auth/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${"HAVE THE TOKEN HERE"}`,
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }
}
