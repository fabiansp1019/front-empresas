import React, { useState } from "react";

import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import Listar_Empresas from "../../components/Empresas/Listar_Empresas";
import Crear_empresa from "../../components/Empresas/Crear_empresa";
import Agregar_Claves from "../../components/Empresas/Agregar_Claves";

import { Button } from "@material-ui/core";
import Layout from "../../components/Layout";


const Empresas = () => {
  const [abrirCrearEmpresa, setAbrirCrearEmpresa] = useState(false);

  return (
    <Layout>
      <Button onClick={()=> setAbrirCrearEmpresa(!abrirCrearEmpresa)}>{!abrirCrearEmpresa ? <AddIcon /> : <KeyboardBackspaceIcon/>}</Button>

      {!abrirCrearEmpresa ? <>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
        <Listar_Empresas />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Crear_empresa />
        </Grid>
      </Grid>

      </> : <Agregar_Claves />}

    </Layout>
  );
};

export default Empresas;
