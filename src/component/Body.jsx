import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import Header from "./Header";

const Body = () => {
  return (
    <div className="flex flex-col gap-3 relative pt-12 px-1 min-h-screen">
      <Header />
      <div className="flex gap-3 flex-1">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
