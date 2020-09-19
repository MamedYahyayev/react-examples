import * as actionTypes from "./actions";

const initalState = {
  employees: [
    {
      id: 1,
      name: "Samir",
      surname: "Samirov",
      age: 25,
      salary: 1200,
    },
    {
      id: 2,
      name: "Qasim",
      surname: "Zakirov",
      age: 33,
      salary: 2400,
    },
    {
      id: 3,
      name: "Eli",
      surname: "Cabbarov",
      age: 33,
      salary: 800,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return {
        state,
      };
  }
};

export default reducer;
