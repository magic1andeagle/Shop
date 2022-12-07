import React from "react";
import cl from "../styles/components/Loader.module.css";

const Loader = () => {
  return (
    <div className={cl.loader_container}>
      <div className={cl.Loader}></div>;
    </div>
  );
};

export default Loader;
