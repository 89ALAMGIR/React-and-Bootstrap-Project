import React from "react";
// import '../style.css;'

const Products = ({ name, price, image }) => {
  return (
    <div>
      <img src={image} alt={name} width="200" />
      <h2>Product Name: {name}</h2>
      <h3 className="price">Price: {price} TK</h3>
    </div>
  );
};

export default Products;
