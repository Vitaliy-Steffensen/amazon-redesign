import React, { useContext } from "react";
//import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../helpers/contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(AuthContext);
  // Add your own authentication on the below line.
  /*   return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
 */
  return <div> {isAuth ? "yse" : "no"} </div>;
};

export default PrivateRoute;
