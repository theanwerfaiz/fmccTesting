import React from "react";
import Header from "./partials/Header";

const BaseTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mainBox">{children}</div>
    </div>
  );
};

export default BaseTemplate;
