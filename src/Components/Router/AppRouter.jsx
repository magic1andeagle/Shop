import React from "react";
import {
  Route, Routes
} from "react-router-dom/umd/react-router-dom.development";
import { publicRoutes } from "../utils/routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) =>
        <Route key={path} path={path} element={element} exact/>
      )}
    </Routes>
  );
};

export default AppRouter;
