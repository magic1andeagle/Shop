import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Components/Router/AppRouter";

import Header from "../src/Components/Header";

import "../src/styles/App.css";
import { sportItemsContext } from "./context/context";

function App() {
  return (
    <sportItemsContext.Provider value={sportItemsContext._currentValue}>
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <AppRouter />
        </div>
      </BrowserRouter>
    </sportItemsContext.Provider>
  );
}

export default App;
