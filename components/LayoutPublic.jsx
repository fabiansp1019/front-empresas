import React from "react";
import Head from "next/head";
import Navegacion from "./navegacion";
import { CssBaseline } from "@material-ui/core";

const LayoutPublic = ({ children }) => {
  return (
    <>
      <Head>
        <title>Machine</title>
      </Head>
      <Navegacion />
      <CssBaseline />
      <>{children}</>


    </>
  );
};

export default LayoutPublic;
