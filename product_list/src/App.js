import React from "react";
import Header from "./components/Header";
import ProductList from "./ProductList";
import 'bootswatch/dist/quartz/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <>
      <Header/>
      <ProductList/>
    </>
  );
};

export default App;
