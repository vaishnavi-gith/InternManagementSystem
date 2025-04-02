import React from "react";
import Sidebar from "../Sidebar";
import Head from "../Header/Head";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head />

      <Sidebar />
      <div className="flex flex-grow">
        <div className="p-6 pt-20 flex-1 overflow-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
