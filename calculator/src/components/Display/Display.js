import React from "react";
import "./Display.css";

import Consumer from "../../context/context";

const Display = () => {
  return (
    <Consumer>
      {(value) => {
        return (
          <div className="Display">
            <div className="Result">{value.result}</div>
            <div className="Calculation">{value.expression}</div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Display;
