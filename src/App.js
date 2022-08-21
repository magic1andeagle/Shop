import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Components/Router/AppRouter";

import Navbar from "../src/Components/Navbar";

import "../src/styles/App.css";
import { sportItemsContext } from "./context/context";

function App() {
  return (
    <sportItemsContext.Provider value={sportItemsContext._currentValue}>
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </sportItemsContext.Provider>
  );
}

export default App;
