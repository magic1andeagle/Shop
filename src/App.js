import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Router/AppRouter";

import Header from "../src/Components/Header";

import "../src/styles/App.css";
import { Provider } from "react-redux";
import { setupStore } from "./store";

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
