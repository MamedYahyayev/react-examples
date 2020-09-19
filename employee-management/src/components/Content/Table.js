import React from "react";
import { connect } from "react-redux";
import "./Table.css";

const table = () => {
  return (
    <div className="Table">
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Salary</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
          <td>25</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
          <td>25</td>
          <td>$150</td>
        </tr>
        <tr>
          <td>Joe</td>
          <td>Swanson</td>
          <td>25</td>
          <td>$300</td>
        </tr>
        <tr>
          <td>Cleveland</td>
          <td>Brown</td>
          <td>25</td>
          <td>$250</td>
        </tr>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  persons: state.persons;
};

export default connect(mapStateToProps)(table);
