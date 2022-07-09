import React from "react";
import Head from "next/head";
import Paperbase from "./LayoutPublic/Paperbase";
import Navegacion from "./LayoutPublic/navegacion";
import { CssBaseline } from "@material-ui/core";

const LayoutPublic = ({ children }) => {
  return (
    <>
      <Head>
        <title>Machine</title>
      </Head>
      <CssBaseline />
      <Paperbase>
        {children}
      </Paperbase>
    </>
  );
};

export default LayoutPublic;
