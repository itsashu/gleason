import React, { ReactElement } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { EmpManagement } from "./EmpManagement";
import { LoginPage } from "./login-page";
import { SecureRoute } from "./secure-route";

export const Routes = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <SecureRoute exact path="/dashboard" component={Dashboard} />
        <SecureRoute exact path="/userManagement" component={EmpManagement} />
        <Route path="/" component={LoginPage} />
        <Route path="" render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
};
