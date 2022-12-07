import React, { useEffect, useContext } from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Router/AppRouter";

import Header from "../src/Components/Header";

import "../src/styles/App.css";
import { itemsContext } from "./context/context";
import { Provider } from "react-redux";
import { setupStore } from "./store";

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <itemsContext.Provider value={itemsContext._currentValue}>
        <BrowserRouter>
          <Header />
          <div className="wrapper">
            <AppRouter />
          </div>
        </BrowserRouter>
      </itemsContext.Provider>
    </Provider>
  );
}

export default App;
