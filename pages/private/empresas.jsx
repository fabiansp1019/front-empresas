import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListItem from "@mui/material/ListItem";

import Listar from "../../components/Empresas/Listar";


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
      <div >
      <Nav />
        <Listar />
      </div>
    </>
  );
};

export default Empresas;
