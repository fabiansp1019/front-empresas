import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import LayoutPrivate from "../../../../components/Layoutprivate";
import Nav_Estados_Financieros from "../../../../components/Empresas/estadosFinancieros/Nav_Estados_Financieros";
import libs from '../../../../libs/util'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {useAuth} from '../../../../libs/auth'
import cookie from "js-cookie";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ClasePucStyle = ({ codigo, nombre }) => {
  return (
    <>
      <Box
        sx={{ width: "59vw" }} //p: 2, border: "1px dashed grey",
      >
        <Item>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography align="left" variant="h6">
                {codigo}
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography align="left" variant="h6">
                {nombre}
              </Typography>
            </Grid>
          </Grid>
        </Item>
      </Box>
    </>
  );
};

const plandecuentas = () => {
  const [estadosFinancieros, setEstadosFinancieros] = useState([]);
  const [statusPage, setStatusPage] = useState(false);
  const router = useRouter();



  //CLASES INICIALES
  const claseInicial = [
    {
      clase: "1",
      nombre: "activo",
      empresaId: router.query.id,
    },
    {
      clase: "2",
      nombre: "pasivo",
      empresaId: router.query.id,
    },
    {
      clase: "3",
      nombre: "patrimonio",
      empresaId: router.query.id,
    },
    {
      clase: "4",
      nombre: "ingresos",
      empresaId: router.query.id,
    },
    {
      clase: "5",
      nombre: "gastos",
      empresaId: router.query.id,
    },
    {
      clase: "6",
      nombre: "costos",
      empresaId: router.query.id,
    },
    {
      clase: "7",
      nombre: "costos de produccion",
      empresaId: router.query.id,
    },
  ];

  const crearClases = async () => {
    const token = cookie.get("__session");
    // claseInicial.map(async (clase) => {
      const resp = await axios({
        method: "post",
        url: libs.location() + "api/crearclases",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: claseInicial,
      });

    router.replace(`/private/estadosfinancieros/informe-financiero/${router.query.id}`);
  };

  const getdata = async () => {
    const token = cookie.get("__session");
    const req = await axios({
      method: "post",
      url: libs.location() + "api/listarclases",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        dataId: router.query.id,
      },
    });
    // console.log(req.data.lista);
    setEstadosFinancieros(req.data.lista);
    // setTimeout(() => {
      // console.log(req.data.lista.length)
      if(req.data?.lista?.length > 0){
        setStatusPage(true);
      }
    // },[1000]);
  };

  const eliminarTodoPuc = async () => {
    const token = cookie.get("__session");
    const req = await axios({
      method: "delete",
      url: libs.location() + "api/borrarclases",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        empresaId: router.query.id,
      },
    });
    router.push(`/private/estadosfinancieros/informe-financiero/${router.query.id}`);
  }
  const eliminarCuentasAuxiliares = async () => {
    const token = cookie.get("__session");
    const req = await axios({
      method: "delete",
      url: libs.location() + "api/borrarauxiliares",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        empresaId: router.query.id,
      },
    });
    router.push(`/private/estadosfinancieros/informe-financiero/${router.query.id}`);
  }

  useEffect(async() => {
    getdata();
  }, []);

  return ( 
    <LayoutPrivate nav={<Nav_Estados_Financieros />}>
      <div>
        {statusPage == false ? (
          <>
            <div>No tienes cargado ningun plan de cuentas.</div>
            <button onClick={crearClases}>crear</button>
          </>
        ) : (
          <>
            <Box sx={{ with: "100vw" }}>
              <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={eliminarTodoPuc}>Eiminar todo</Button>
                <Button onClick={eliminarCuentasAuxiliares}>Eliminar Auxiliares</Button>
              </ButtonGroup>
              <div>
                {estadosFinancieros?.map((estado, key) => {
                  return (
                    <div key={key}>
                      <ClasePucStyle
                        codigo={estado.clase}
                        nombre={estado.nombre}
                      />
                      <>
                        {estado.grupos.map((grup, key1) => {
                          return (
                            <div key={key1}>
                              <ClasePucStyle
                                codigo={grup.grupo}
                                nombre={grup.nombre}
                              />

                              <>
                                {grup.cuentas.map((cuenta, key2) => {
                                  return (
                                    <div key={key2}>
                                      <ClasePucStyle
                                        codigo={cuenta.cuentas}
                                        nombre={cuenta.nombre}
                                      />
                                      <>
                                        {cuenta.subcuentas.map((subcuenta, key3) => {
                                          return (
                                            <div key={key3}>
                                              <ClasePucStyle
                                                codigo={subcuenta.subcuentas}
                                                nombre={subcuenta.nombre}
                                              />
                                            </div>
                                          );
                                        })}
                                      </>
                                    </div>
                                    // aquii
                                  );
                                })}
                              </>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  );
                })}
              </div>
            </Box>
          </>
        )}
      </div>
    </LayoutPrivate>
  );
};

export default plandecuentas;
