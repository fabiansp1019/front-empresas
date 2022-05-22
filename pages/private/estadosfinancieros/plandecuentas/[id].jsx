import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import LayoutPrivate from "../../../../components/Layoutprivate";
import Nav_Estados_Financieros from "../../../../components/Empresas/Nav_Estados_Financieros";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';

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
              <Typography align="left" variant="h6">{codigo}</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography align="left" variant="h6">{nombre}</Typography>
            </Grid>
          </Grid>
        </Item>
      </Box>
    </>
  );
};



const plandecuentas = () => {
  const [estadosFinancieros, setEstadosFinancieros] = useState([]);

  const getdata = async () => {
    const req = await axios({
      method: "get",
      url: "http://localhost:4000/api/listarclases",
      headers: {
        authorization: window.localStorage.getItem("loggedApp"),
      },
    });
    setEstadosFinancieros(req.data.lista);
  };

  useEffect(() => {
    getdata();
    // console.log(saldos());
  }, []);

  return (
    <LayoutPrivate nav={<Nav_Estados_Financieros />}>
      <div>

      <Box sx={{with:'100vw'}}>

          <ul>
            {estadosFinancieros.map((estado) => {
              return (
                <>
                  <ClasePucStyle codigo={estado.clase} nombre={estado.nombre} />
                  <>
                    {estado.grupos.map((grup) => {
                      return (
                        <>
                          <ClasePucStyle
                            codigo={grup.grupo}
                            nombre={grup.nombre}
                          />

                          <>
                            {grup.cuentas.map((cuenta) => {
                              return (
                                <>
                                  <ClasePucStyle
                                    codigo={cuenta.cuentas}
                                    nombre={cuenta.nombre}
                                  />
                                  <>
                                    {cuenta.subcuentas.map((subcuenta) => {
                                      return (
                                        <>
                                          <ClasePucStyle
                                            codigo={subcuenta.subcuentas}
                                            nombre={subcuenta.nombre}
                                          />
                                        </>
                                      );
                                    })}
                                  </>
                                </>
                                // aquii
                              );
                            })}
                          </>
                        </>
                      );
                    })}
                  </>
                </>
              );
            })}
          </ul>
      </Box>

      </div>
    </LayoutPrivate>
  );
};

export default plandecuentas;
