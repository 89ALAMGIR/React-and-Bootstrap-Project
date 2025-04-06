import React from "react";

const Products = ({ name, price, image }) => {
  return (
    <div>
      <img src={image} alt={name} width="200" />
      <h2>Product Name: {name}</h2>
      <h3>Price: {price} TK</h3>
    </div>
  );
};

export default Products;
