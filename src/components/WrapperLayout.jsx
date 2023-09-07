import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const WrapperLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="content-page">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default WrapperLayout;
