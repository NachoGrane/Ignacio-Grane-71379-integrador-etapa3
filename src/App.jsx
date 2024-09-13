import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rutas from "./routes/Rutas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import Navbar from "./components/Navbar";

const App = () => {
  const [navBarActive, setNavBarActive] = useState(false);

  // useEffect(() => {
  //   navBarActive ? setNavBarActive(true) : setNavBarActive(false);
  // });
  console.log(navBarActive);
  return (
    <>
      <div className={` ${navBarActive ? "toggle-body" : "toggle-bodyClose"}`}>
        <BrowserRouter>
          <Navbar setNavBarActive={setNavBarActive} />
          <Header />
          <Rutas />
          <Breadcrumbs />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
