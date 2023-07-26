import React from "react";
import Footer from "./Footer";
import MainNav from "./MainNav";

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
