import React from "react";

import './Pagination.css'
const Pagination = () => {
  return (
    <div className="Pagination">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item active">
            <a class="page-link" href="a">
              1
            </a>
          </li>
          <li class="page-item">
            <span class="page-link">
              2<span class="sr-only">(current)</span>
            </span>
          </li>
          <li class="page-item">
            <a class="page-link" href="a">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="a">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
