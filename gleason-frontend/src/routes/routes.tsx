import { ReactElement } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../components/dashboard/dashboard.component";
import { EmployeeManagement } from "../components/employee-management/employee-management.component";
import { LoginPage } from "../components/login-page/login-page.component";
import { SecureRoute } from "./secure-route";

export const Routes = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <SecureRoute exact path="/Employee-Dashboard" component={Dashboard} />
        <SecureRoute
          exact
          path="/Employee-Management"
          component={EmployeeManagement}
        />
        <Route path="/" component={LoginPage} />
        <Route path="" render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
};
