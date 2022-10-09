import React from "react";
import Home from "./Home";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ProductDetails from "./ProductDetails";
import { Route, Routes } from 'react-router-dom'
function Main() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
