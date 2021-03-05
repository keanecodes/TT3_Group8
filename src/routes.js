//Dashboard routes
import Dashboard from "pages/App/Dashboard/Dashboard";
import Transaction from "pages/App/Dashboard/Transaction";
<<<<<<< HEAD
import UserDetails from "pages/UserDetails/UserDetails";
=======
import BuySellAssets from "pages/App/Dashboard/BuySellAssets";

import CurrentPrice from "pages/currentprice/CurrentPrice";
>>>>>>> eccac64f138b557aeec77d415c20e5f78221e1ba
//React to create Routes here instead of in layouts to avoid repeating codes
import React from 'react'
import { Route } from "react-router-dom";
import Login1 from 'pages/App/Dashboard/Login';
import History from 'pages/App/Dashboard/History';

export let routes = [
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
<<<<<<< HEAD
    path: "/Login1",
    name: "logining",
    component: Login1,
=======
    path: "/buysellassets",
    name: "Buy / Sell Assets",
    component: BuySellAssets,
>>>>>>> eccac64f138b557aeec77d415c20e5f78221e1ba
    icon: "txn",
    layout: "/app"
  },
  {
<<<<<<< HEAD
    path: "/history",
    name: "logining",
    component: History,
    icon: "txn",
=======
    path: "/currentprice",
    name: "CurrentPrice",
    component: CurrentPrice,
    icon: "home",
>>>>>>> eccac64f138b557aeec77d415c20e5f78221e1ba
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