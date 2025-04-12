import React from "react";
// import '../style.css;'//


const Products = ({ name, price, image, description }) => {
  const showDescription = ()=>{
    alert(description);
  };
  
  return (
    <div className="card h-100">
      <img src={image} alt={name} className="card-image-top p-4" />
      <div className="card-body d-flex flex-column">
        <h2 className="card-title">Product Name: {name}</h2>
        <p className="card-text">{description}</p>
        <b className="card-text mt-auto">Price: {price} TK</b>
        <button className="btn btn-primary mt-auto" onClick={showDescription}>
          Show Description
        </button>
      </div>
    </div>
  );
};

export default Products;
