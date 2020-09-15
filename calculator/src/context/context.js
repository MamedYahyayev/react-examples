import React, { createContext, useState } from "react";

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_EXPRESSION":
      return {
        ...state,
        expression: state.expression + action.payload,
      };
    case "DELETE_EXPRESSION":
      return {
        ...state,
        expression: "",
      };
    case "CALCULATE_EXPRESSION":
      return {
        ...state,
        expression: "",
        result: state.expression ,
      };
    default:
      return state;
  }
};

export const Provider = (props) => {
  const [state, setState] = useState({
    symbols: [
      {
        id: 1,
        sign: "C",
        category: "symbol",
      },
      {
        id: 2,
        sign: "<-",
        category: "symbol",
      },
      {
        id: 3,
        sign: "%",
        category: "symbol",
      },
      {
        id: 4,
        sign: "/",
        category: "symbol",
      },
      {
        id: 5,
        sign: "7",
        category: "number",
      },
      {
        id: 6,
        sign: "8",
        category: "number",
      },
      {
        id: 7,
        sign: "9",
        category: "number",
      },
      {
        id: 8,
        sign: "*",
        category: "symbol",
      },

      {
        id: 9,
        sign: "4",
        category: "number",
      },
      {
        id: 10,
        sign: "5",
        category: "number",
      },
      {
        id: 11,
        sign: "6",
        category: "number",
      },
      {
        id: 12,
        sign: "-",
        category: "symbol",
      },

      {
        id: 13,
        sign: "1",
        category: "number",
      },
      {
        id: 14,
        sign: "2",
        category: "number",
      },
      {
        id: 15,
        sign: "3",
        category: "number",
      },
      {
        id: 16,
        sign: "+",
        category: "symbol",
      },
      {
        id: 17,
        sign: "0",
        category: "number",
      },
      {
        id: 18,
        sign: ".",
        category: "symbol",
      },
      {
        id: 19,
        sign: "=",
        category: "symbol",
      },
    ],
    expression: "",
    value1: "",
    value2: "",
    result: "0",
    dispatch: (action) => {
      setState((state) => reducer(state, action));
    },
  });

  return <Context.Provider value={state}>${props.children}</Context.Provider>;
};

const Consumer = Context.Consumer;

export default Consumer;
