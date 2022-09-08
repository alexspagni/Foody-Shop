import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";

// The <App /> component is our root-level component. This means it’s at the very top of our component hierarchy.
//The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App /> 
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
