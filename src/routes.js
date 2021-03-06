//Dashboard routes
import Dashboard from "pages/App/Dashboard/Dashboard";
import Balance from "pages/App/Dashboard/Balance"
import Transaction from "pages/App/Dashboard/Transaction";
import BuySellAssets from "pages/App/Dashboard/BuySellAssets";

import CurrentPrice from "pages/currentprice/CurrentPrice";

//React to create Routes here instead of in layouts to avoid repeating codes
import React from 'react'
import { Route } from "react-router-dom";
// import Login1 from 'pages/App/Dashboard/Login';
import History from 'pages/App/Dashboard/History';
import logo from './img/DBSLogo.png'; 


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
//   {
//     path: "/Login1",
//     name: "logining",
//     component: Login1,
//     icon: "txn",
//     layout: "/app"
//   },
  {
    path: "/BuySellAssets",
    name: "Buy / Sell Assets",
    component: BuySellAssets,
    icon: "txn",
    layout: "/app"
  },
  {
    path: "/history",
    name: "History",
    component: History,
    icon: "txn",
    layout: "/app"
    
  },
  {
    path: "/balance",
    name: "Wallet Balance",
    component: Balance,
    icon: "txn",
    layout: "/app"
  },
  {
    path: "/currentprice",
    name: "CurrentPrice",
    component: CurrentPrice,
    icon: "home",
    layout: "/app"
  },
];

export const getRoutes = layoutPath => {
  return routes.map((prop, key) => {
    // <img src = {logo} alt = "DBS Logo" className = "logo" ></img>
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