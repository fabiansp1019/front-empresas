import React from "react";
import Head from "next/head";
import Navegacion from "./navegacion";

import { useAuth } from '../libs/auth'
import NoAutorizado from "./NoAutorizado";
const Layout = ({ children }) => {
  const {isSignedIn, user } = useAuth()
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
