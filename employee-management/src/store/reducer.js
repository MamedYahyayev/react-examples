const initialState = {
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
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
