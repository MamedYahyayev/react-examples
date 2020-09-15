import React from "react";
import Button from "./Button/Button";

import Consumer from "../../context/context";

import "./CalculatorTools.css";

const CalculatorTools = () => {
  return (
    <Consumer>
      {(value) => {
        const buttons = value.symbols;
        return (
          <div className="Tools">
            {buttons.map((button , index) => {
              return <Button symbol={button} key={index} />;
            })}
          </div>
        );
      }}
    </Consumer>
  );
};

export default CalculatorTools;
