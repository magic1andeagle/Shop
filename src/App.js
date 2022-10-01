import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Components/Router/AppRouter";

import Header from "../src/Components/Header";

import "../src/styles/App.css";
import { itemsContext } from "./context/context";

function App() {
  return (
    <itemsContext.Provider value={itemsContext._currentValue}>
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <AppRouter />
        </div>
      </BrowserRouter>
    </itemsContext.Provider>
  );
}

export default App;
