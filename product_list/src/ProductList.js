import React from "react";
import Products from "./components/Products";
import products from "./data/products";

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <Products key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
