import React from "react";

import "./Modal.css";

const modal = (props) => {
  const { name, surname, age, salary } = props.employee;

  return (
    <div className="Modal">
      <input type="text" placeholder="Name" value={name} />
      <input type="text" placeholder="Surname" value={surname} />
      <input type="text" placeholder="Age" value={age} />
      <input type="text" placeholder="Salary" value={salary} />
      <div className="Buttons">
        <button onClick={props.hide}>Close</button>
        <button>Update</button>
      </div>
    </div>
  );
};

export default modal;
