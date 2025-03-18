import React from "react";
import { Outlet } from "react-router-dom";
import Logotype from "../../partials/sections/Logotype";
import Sidebar from "../../partials/sections/Sidebar";
import Header from "../../partials/sections/Header";

const Layout = () => {
  return (
    <div className="wrapper">
      <Logotype />
      <Sidebar />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
