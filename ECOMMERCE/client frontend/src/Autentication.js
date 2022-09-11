import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRouter({ component: Component, ...rest }) {
  return (
    //Uso direttamente ...rest per fare lo spread delle prop restanti passate a private route ad esempio la prop "to"=....
    <Route
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem("userInfo");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
}

export default PrivateRouter;
