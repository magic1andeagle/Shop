import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/" style={{ textDecoration: "none" }}>
            Home page
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
          <Link to="/items" style={{ textDecoration: "none" }}>
            Store
          </Link>
        </div>
      </div>
      <h1 style={{textAlign: 'center'}}>404 Not Found</h1>
    </div>
  );
};

export default Error;
