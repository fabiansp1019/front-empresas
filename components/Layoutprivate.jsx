import React from "react";
import Head from "next/head";
import Navegacion from "./navegacion";

import { useAuth } from '../libs/auth'
import Paper from './Layout/Paperbase'
import NoAutorizado from "./NoAutorizado";
const LayoutPrivate = ({ children, nav }) => {

  return (
    <>
  
      <Head>
        <title>SITEMAS ADM</title>
      </Head>
      {/* <Paper /> */}
      <Paper nav={nav}>
        {children}
        
      </Paper>


    </>
  );
};

export default LayoutPrivate;