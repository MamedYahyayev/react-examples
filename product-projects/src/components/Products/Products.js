import React from "react";
import Product from "./Product/Product";
import Consumer from "../Aside/context";

import "./Products.css";

const products = (props) => {
  return (
    <Consumer>
      {(value) => {
        const products = value.products;
        const buttonType = value.button;
        return (
          <div className="Products">
            <div className="row">
              {
                products.map(product => {
                  if(product.category === buttonType){
                    return  <Product key={product.id} buttonType={buttonType} product={product} state={value}/>
                  }
                })
              }
            </div>
          </div>
        );
      }
    }
    </Consumer>
  );
};

export default products;
