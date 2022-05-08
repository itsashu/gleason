import React from "react";
import { Redirect, Route } from "react-router-dom";

export const SecureRoute = (props: any) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return isAuthenticated ? (
    <Route exact path={props.path} component={props.component} />
  ) : (
    <Route path="" render={() => <Redirect to="/login" />} />
  );
};
