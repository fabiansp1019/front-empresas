import React, { useState } from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Link from "next/link";
import KeyIcon from '@mui/icons-material/Key';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import ListItem from '@mui/material/ListItem';

import Listar from "../../components/Empresas/Listar";
import Layout from "../../components/Layoutprivate";


export const Nav = () =>{
  return(
  <BottomNavigation  >
   <ListItem></ListItem>
   <ListItem></ListItem>
   <ListItem><Link href={'/private/emp/add_key'}><KeyIcon color="primary" /></Link></ListItem>
   <ListItem><Link href={'/private/emp/create_emp'}><AddCircleIcon color="primary"/></Link></ListItem>
   <ListItem></ListItem>
   <ListItem></ListItem>
  {/* <BottomNavigationAction  icon={<RestoreIcon />} /> */}
</BottomNavigation>
  )
}


const Empresas = () => {

  return (
    <>
     
    <Layout nav={<Nav/>}>
{/* 
      <BottomNavigation>
        <FolderIcon />
        <FolderIcon />
      </BottomNavigation> */}
    

      <Listar />

      {/* <Agregar_Claves/> */}
      {/* <Button onClick={()=> setAbrirCrearEmpresa(!abrirCrearEmpresa)}>{!abrirCrearEmpresa ? <AddIcon /> : <KeyboardBackspaceIcon/>}</Button>

      {!abrirCrearEmpresa ? <>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
        <Listar_Empresas />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Crear_empresa />
        </Grid>
      </Grid>

      </> : <Agregar_Claves />} */}

    </Layout>
    
    </>
  );
};

export default Empresas;
