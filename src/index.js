import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop";
import { getCats } from "./Cats/actions";
import { composeWithDevTools } from "redux-devtools-extension";
import "./App.css";

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, isDev ? logger : (s) => (n) => (a) => n(a))
  )
);

store.dispatch(getCats());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Helmet>
        <title>Ivo Digital - Catsat Technical Assessment</title>
        <meta
          property="og:title"
          content="Ivo Digital - Catsat Technical Assessment"
        />
        <meta
          property="og:site_name"
          content="Ivo Digital - Catsat Technical Assessment"
        />
      </Helmet>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
