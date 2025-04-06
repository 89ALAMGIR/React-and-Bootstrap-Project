import React from "react";
import Products from "./components/Products";
import products from "./data/products";

// const products = [
//   {
//     name: "MongoDB",
//     price: "500",
//   },
//   {
//     name: "Django",
//     price: "700",
//   }
// ];

const ProductList = () => {
  return (
    <div>
      {/* <Products name ={product1.name} price={product1.price}/>
      <Products name ='Technologia' price="200" />
      <Products name ='Telephone' price='300'/>
      <Products {...product2} /> */}
      {products.map((product, index) => (
        <Products key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
