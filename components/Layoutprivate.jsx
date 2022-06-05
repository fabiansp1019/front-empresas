import React from "react";
import Head from "next/head";
import Paper from './Layout/Paperbase'
const LayoutPrivate = ({ children, nav }) => {

  return (
    <>
      <Head>
        <title>Machine</title>
      </Head>
      <Paper nav={nav}>
        {children}
      </Paper>
    </>
  );
};

export default LayoutPrivate;