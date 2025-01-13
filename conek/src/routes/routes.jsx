import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import { PrivateRoute } from "./PrivateRoutes";
import {Routes, Route } from "react-router-dom";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;