import React from "react";
import Head from "next/head";
import Navegacion from "./navegacion";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Proyecto Next js</title>
      </Head>
      <Navegacion />
      <div>{children}</div>
    </>
  );
};

export default Layout;
