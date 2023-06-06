import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/Constants/RoutePathConstants";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>} />
        <Route path={ROUTES.ABOUT} element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
