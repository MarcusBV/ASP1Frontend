import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../partials/sections/SideBar";
import Header from "../../partials/sections/Header";

const Layout = () => {
  return (
    <div className="wrapper-portal">
      <SideBar />
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
