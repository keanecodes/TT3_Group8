//User routes
import Login from "pages/Bridge/Auth/Login";
//Dashboard routes
import Dashboard from "pages/App/Dashboard/Dashboard";
import Transaction from "pages/App/Dashboard/Transaction";
import buySellAssets from "pages/App/Dashboard/buySellAssets";

//React to create Routes here instead of in layouts to avoid repeating codes
import React from 'react'
import { Route } from "react-router-dom";

export let routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/user"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    icon: "home",
    layout: "/app"
  },
  {
    path: "/transaction",
    name: "Past Transactions",
    component: Transaction,
    icon: "txn",
    layout: "/app"
  },
  {
    path: "/buysellassets",
    name: "Buy / Sell Assets",
    component: buySellAssets,
    icon: "txn",
    layout: "/app"
  },
];

export const getRoutes = layoutPath => {
  return routes.map((prop, key) => {
    if (prop.collapse) {
      return this.getRoutes(prop.views);
    }
    if (prop.layout === layoutPath) {
      return (
        <Route
          exact path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
}