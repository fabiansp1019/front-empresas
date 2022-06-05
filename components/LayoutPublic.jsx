import React from "react";
import Head from "next/head";
import Navegacion from "./navegacion";

const LayoutPublic = ({ children }) => {
  return (
    <>
      <Head>
        <title>Machine</title>
      </Head>
      <Navegacion />
      <>{children}</>


    </>
  );
};

export default LayoutPublic;
