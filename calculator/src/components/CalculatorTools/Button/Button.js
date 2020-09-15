import React from "react";
import Consumer from "../../../context/context";
import "./Button.css";

const Button = (props) => {
  let symbolClass = null;

  if (props.symbol.sign === "=") {
    symbolClass = "Equals-Sign";
  } else if (props.symbol.category === "symbol") {
    symbolClass = "Sign";
  } else {
    symbolClass = "Number";
  }

  const buttonClicked = (sign, dispatch) => {
    if (sign === "C") deleteExpression(sign, dispatch);
    else if (sign === "=") calculateResult(sign, dispatch);
    else if( sign === "-" || sign === "+") calculateResult(sign , dispatch);
    else dispatch({ type: "CHANGE_EXPRESSION", payload: sign });
  };

  const deleteExpression = (sign, dispatch) => {
    dispatch({ type: "DELETE_EXPRESSION", payload: sign });
  };

  const calculateResult = (sign, dispatch) => {
    dispatch({ type: "CALCULATE_EXPRESSION", payload: sign });
  };

  return (
    <Consumer>
      {(value) => {
        const dispatch = value.dispatch;
        return (
          <div
            className={"Button " + symbolClass}
            onClick={() => buttonClicked(props.symbol.sign, dispatch)}
          >
            {props.symbol.sign}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Button;
