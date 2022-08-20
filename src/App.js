import React, { useContext } from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Components/Router/AppRouter";
import Navbar from "../src/Components/Navbar";

import "../src/styles/App.css";
import { sportItemsContext } from "./context/context";

function App() {
  return (
    <sportItemsContext.Provider value={sportItemsContext._currentValue}>
      <BrowserRouter>
        <wrapper>
          <Navbar />
          <AppRouter />
        </wrapper>
      </BrowserRouter>
    </sportItemsContext.Provider>
  );
}

export default App;
