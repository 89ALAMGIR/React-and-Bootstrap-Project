import React from "react";
import Products from "./components/Products";
import products from "./data/products";

const ProductList = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
          {products.map((product) => (
            <div className="col">
              {" "}
              <Products key={product.id} {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
