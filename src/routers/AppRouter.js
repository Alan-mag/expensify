import React from "react";
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpense';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import EditExpensePage from '../components/EditExpense';
import PageNotFound from '../components/PageNotFound';
import LoginPage from "../components/LoginPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;