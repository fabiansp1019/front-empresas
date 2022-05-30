import React from "react";
import Head from "next/head";
import Navegacion from "./navegacion";

import { useAuth } from '../libs/auth'
import Paper from './Layout/Paperbase'
import NoAutorizado from "./NoAutorizado";
const LayoutPublic = ({ children }) => {
  const {isSignedIn, user } = useAuth()
  return (
    <>
  
      <Head>
        <title>MACHINE</title>
      </Head>
      <Navegacion />

      <>{children}</>


    </>
  );
};

export default LayoutPublic;
