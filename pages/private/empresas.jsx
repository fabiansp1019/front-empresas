import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListItem from "@mui/material/ListItem";

import Listar from "../../components/Empresas/Listar";
import Layout from "../../components/Layoutprivate";

export const Nav = () => {
  return (
    <BottomNavigation>
       <ListItem>
        <Link href={"/private/emp/create_emp"}>
          <AddCircleIcon color="primary" />
        </Link>
      </ListItem>
    </BottomNavigation>
  );
};

const Empresas = () => {
  return (
    <>
      <Layout nav={<Nav />}>
        <Listar />
      </Layout>
    </>
  );
};

export default Empresas;
