import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/Components/Router/AppRouter";
import Navbar from "../src/Components/Navbar";

import "../src/styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <wrapper>
        <Navbar />
        <AppRouter />
      </wrapper>
    </BrowserRouter>
  );
}

export default App;
