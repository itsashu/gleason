import { ReactElement } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../components/dashboard/dashboard";
import { EmployeeManagement } from "../components/employee-management/EmpManagement";
import { LoginPage } from "../components/login-page/login-page";
import { SecureRoute } from "./secure-route";

export const Routes = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <SecureRoute exact path="/dashboard" component={Dashboard} />
        <SecureRoute
          exact
          path="/userManagement"
          component={EmployeeManagement}
        />
        <Route path="/" component={LoginPage} />
        <Route path="" render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
};
