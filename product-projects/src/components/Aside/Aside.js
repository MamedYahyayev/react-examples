import React from "react";

import "./Aside.css";
import Consumer from "./context";

const buttons = ["Meat", "Milk", "Drink", "Skin-Care"];

const aside = (props) => {


  const buttonClicked = (buttonType,dispatch) => {
    dispatch({type:"CHANGE_CATEGORY" , payload:buttonType});
  };



  return (
    <Consumer>
      {(value) => {

        const dispatch = value.dispatch;

        return (
          <div className="Aside">
            <h1>Categories</h1>
              {buttons.map((button, index) => {
                return (
                  <a
                    className="waves-effect waves-light btn-small purple darken-4"
                    onClick={() => buttonClicked(button , dispatch)}
                    key={index}
                  >
                    {button}
                  </a>
                );
              })}
          </div>
        );
      }}
    </Consumer>
  );
};

export default aside;
