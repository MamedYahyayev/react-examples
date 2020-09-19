import React from "react";

import Menu from "../components/Menu/Menu";
import Table from "../components/Content/Table";

import "./Container.css";
const Container = () => {
  return (
    <div className="Container">
      <Menu />
      <Table />
    </div>
  );
};

export default Container;
