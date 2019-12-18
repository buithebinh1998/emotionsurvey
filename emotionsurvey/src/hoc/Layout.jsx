import React from "react";
import Header from "../component/Header/Header";
const Layout = props => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="main-container">{children}</div>
    </>
  );
};

export default Layout;
