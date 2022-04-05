import React, { useState } from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from "next/link";
import KeyIcon from '@mui/icons-material/Key';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Agregar_Claves from "../../components/Empresas/Agregar_Claves";

import ListItem from '@mui/material/ListItem';

import Listar from "../../components/Empresas/Listar";
import Layout from "../../components/Layoutprivate";


export const Nav = () =>{
  return(
  <BottomNavigation  >
   <ListItem></ListItem>
   <ListItem></ListItem>
   <ListItem><Link href={'/private/emp/add_key'}><KeyIcon color="primary" /></Link></ListItem>
   <ListItem><Link href={'/private'}><AddCircleIcon color="primary"/></Link></ListItem>
   <ListItem></ListItem>
   <ListItem></ListItem>
  {/* <BottomNavigationAction  icon={<RestoreIcon />} /> */}
</BottomNavigation>
  )
}


const Empresas = () => {
  const [abrirCrearEmpresa, setAbrirCrearEmpresa] = useState(false);

  // const classes = useStyles();
 




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
