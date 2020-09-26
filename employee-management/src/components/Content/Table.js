import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import Modal from "../Modal/Modal";
import "./Table.css";

function Table(props) {
  const [show, setShow] = useState(false);
  const [empId, setEmpId] = useState(0);

  const handleShow = (id) => {
    setShow(true);
    setEmpId(id);
  };

  const closeModal = () => {
    setShow(false);
  };

  const addTableData = () => {
    return props.employees.map((employee) => {
      const { id, name, surname, age, salary } = employee; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{surname}</td>
          <td>{age}</td>
          <td>{salary}</td>
          <td>
            <i onClick={() => handleShow(id)} class="fas fa-pen-alt update"></i>
          </td>
          <td>
            <i
              onClick={() => props.onDeleteEmployee(id)}
              class="fas fa-user-minus delete"
            ></i>
          </td>
        </tr>
      );
    });
  };

  return (
    <Fragment>
      <div className="Table">
        <table>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {addTableData()}
        </table>
      </div>
      {props.employees.map((employee) => {
        if (employee.id === empId) {
          return show ? (
            <Modal hide={closeModal} key={employee.id} employee={employee} />
          ) : null;
        }
      })}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteEmployee: (id) =>
      dispatch({ type: "DELETE_EMPLOYEE", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
