import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">Hello Everyone</div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
