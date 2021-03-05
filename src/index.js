// Framework
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as serviceWorker from './serviceWorker';

// Design 
import './index.css';
import "antd/dist/antd.css";
import Login from "./pages/Bridge/Auth/Login"
import AppLayout from "./pages/App/AppLayout"

// Data & State Management
import axios from 'axios'
import { RecoilRoot } from 'recoil';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
const hist = createBrowserHistory();

ReactDOM.render(
  // <React.StrictMode>
    <RecoilRoot>
      <Router history={hist}>
        <Switch>
          <Route
            exact path="/"
            render={props => {
              return <Login {...props} />;
            }}
          />
          <Route
            path="/app"
            render={props => {
              return <AppLayout {...props} />;
            }}
          />
        </Switch>
      </Router>
    </RecoilRoot>
  // </React.StrictMode>,
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
