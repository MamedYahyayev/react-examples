import React from "react";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";

import "./Content.css";
const Content = () => {
  return (
    <div className="Content">
      <Cards />
      <Pagination />
    </div>
  );
};

export default Content;
