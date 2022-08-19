import React, { useContext } from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Components/Router/AppRouter";
import Navbar from "../src/Components/Navbar";

import "../src/styles/App.css";
import { Context } from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <Context.Provider value={Context}>
        <wrapper>
          <Navbar />
          <AppRouter />
        </wrapper>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
