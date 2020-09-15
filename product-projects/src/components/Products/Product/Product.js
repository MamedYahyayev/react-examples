import React, { useState } from "react";
import "./Product.css";

const Product = (props) => {

  const product = props.product;

  return (
    <div className="Product">
      <div className="card small">
        <div className="card-image">
          <img src={product.img} />
          <span
            className="card-title"
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {product.name}
          </span>
        </div>
        <div className="card-content">
          <p>{product.description}</p>
        </div>
        <div className="card-action">
          <a>See More</a>
        </div>
      </div>
    </div>
  );
};

export default Product;
