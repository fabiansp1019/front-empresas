import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import LayoutPrivate from "../../../../components/Layoutprivate";
import libs from "../../../../libs/util";
import { useAuth } from "../../../../libs/auth";
import Nav_Estados_Financieros from "../../../../components/Empresas/estadosFinancieros/Nav_Estados_Financieros";
import CabeceraEstadosFinancieros from "../../../../components/Empresas/estadosFinancieros/CabeceraEstadosFinancieros";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import jsPDF from "jspdf";

export const ClasessEEFF = ({ codigo, nombre, valor, children }) => {
  return (
    <>
      <Box
        sx={{
          width: "55vw",
          background: "#FFFFFF",
          margin: "none",
          border: "0px",
          paddingLeft: "1rem",
        }} //p: 2, border: "1px dashed grey",
      >
        <>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <Typography align="justify" variant="eeff">
                {codigo}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography align="left" variant="eeff">
                {nombre.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography align="left" variant="eeff"></Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              {children}
            </Grid>
            {/* inicia otra fila  */}
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Typography align="left" variant="eeff">
                <strong>TOTAL {nombre.toUpperCase()}</strong>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography align="right" variant="eeff">
                <strong>{valor}</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </>
      </Box>
    </>
  );
};

export const GrupossEEFF = ({ codigo, nombre, valor, children }) => {
  return (
    <>
      <Box
        sx={{ width: "55vw", backgroundColor: "#FFFFFF" }} //p: 2, border: "1px dashed grey",
      >
        <>
          <Grid container spacing={0}>
            {/* inicia una columna */}
            <Grid item xs={1}>
              <Typography align="left" variant="eeff">
                {codigo}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography align="left" variant="eeff">
                {nombre.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              {/* finaliza una column */}
              <Typography align="left" variant="eeff"></Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            {/* aqui van las cuentas */}
            <Grid item xs={12}>
              {children}
            </Grid>
            {/* inicia otra fila  */}
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Typography align="left" variant="eeff">
                <strong>TOTAL {nombre.toUpperCase()}</strong>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography align="right" variant="eeff">
                <strong>{valor}</strong>
              </Typography>
            </Grid>
          </Grid>
        </>
      </Box>
    </>
  );
};
export const CuentasEEFF = ({ codigo, nombre, valor }) => {
  return (
    <>
      <Box
        sx={{
          width: "55vw",
          border: 0,
          background: "#FFFFFF",
          // "&:hover": {
          //   backgroundColor: "#C3F9FF",
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }} //p: 2, border: "1px dashed grey",
      >
        <>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <Typography align="left" variant="eeff">
                {codigo}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography align="left" variant="eeff">
                {nombre.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography align="right" variant="eeff">
                {valor}
              </Typography>
            </Grid>
          </Grid>
        </>
      </Box>
    </>
  );
};
export const Aux = ({ codigo, nombre, valor, children }) => {
  return (
    <>
      <Box
        sx={{
          width: "55vw",
          background: "#FFFFFF",
          margin: "none",
          border: "0px",
          paddingLeft: "1rem",
        }} //p: 2, border: "1px dashed grey",
      >
        <>
          <Grid container spacing={0}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Typography align="left" variant="eeff">
                <strong>{nombre?.toUpperCase()}</strong>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography align="right" variant="eeff">
                <strong>{valor}</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </>
      </Box>
    </>
  );
};


const id = () => {
  const [estadosFinancieros, setEstadosFinancieros] = useState([]);
  const [dataa, setDataa] = useState([]);
  const [saldosPorGrupos, setSaldosPorGrupos] = useState([]);
  const [saldosPorCuentas, setSaldosPorCuentas] = useState([]);
  const [totales, setTotales] = useState([]);
  const [verPDF, setVerPDF] = React.useState(false);
  const [idCliente, setIdCliente] = React.useState("");
  const [encabezado, setEncabezado] = React.useState({});
  const { query } = useRouter();
  const { getAuthHeaders } = useAuth();


  const getdata = async () => {
   
    const req = await axios({
      method: "post",
      url: libs.location() + "api/listarclases",
      headers: getAuthHeaders(),
      data: {
        dataId: query.id,
      },
    });

    setEstadosFinancieros(req.data.lista);
    setDataa(req.data.saldoPorClase);
    setSaldosPorGrupos(req.data.saldosPorGrupo);
    setSaldosPorCuentas(req.data.saldosPorCuentas);
    setTotales(req.data.valores_adicionales);
  }

  useEffect(async () => {
    getdata();

      const req = await axios({
    method: "post",
    url: libs.location() + "api/buscarempresa",
    headers: getAuthHeaders(),
    data: {
      id: query.id,
    },
  });
  // console.log(req.data)
  setEncabezado({
      razonsocial: req.data.razonSocial,
      nit: req.data.nit,
      periodo: "A DICIEMBRE DEL 2021",
      estadoFinanciero: "ESTADO DE SITUACION FINANCIERA",
      cifras: "Cifras expresadas en miles de pesos COP",
      url: req.data?.logo,
    });

    // console.log(encabezado);


  }, []);

  const generePdf = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#pdf"), {
      callback: function (pdf) {
        pdf.save("estado_financiero.pdf");
      },
    });
  };

  return (
    <LayoutPrivate nav={<Nav_Estados_Financieros />}>
      <div>
      <button onClick={generePdf}>Abrir</button>
        <Box id="pdf" sx={{ paddingLeft: 2 }}>

          {verPDF == false && (
            <>
              <Box
                sx={{ width: "59vw" }} //p: 2, border: "1px dashed grey",
                id="element-to-print"
              >
                <>
                  <CabeceraEstadosFinancieros name={"ESTADO DE RESULTADO"} />
                </>
              </Box>
              <>
                {estadosFinancieros.map((estado, key) => {
                  // setTotalActivos(estado.clase == '1' ? 'siii' : null)
                  return (
                    <>
                      {(estado.clase !== "4") &
                      (estado.clase !== "5") &
                      (estado.clase !== "6") &
                      (estado.clase !== "7") ? (
                        <>
                          <ClasessEEFF
                            key={key}
                            codigo={estado.clase}
                            nombre={estado.nombre}
                            valor={libs.formatNumber(
                              dataa.filter((e) => e.clase == estado.clase)[0]
                                ?.saldoTotal
                            )}
                          >
                            <>
                              {estado.grupos.map((grup, key2) => {
                                return (
                                  <>
                                    {saldosPorGrupos.filter(
                                      (e) => e.grupo == grup.grupo
                                    )[0]?.saldoTotal > 0 && (
                                      <>
                                        <GrupossEEFF
                                          key={key2}
                                          codigo={grup.grupo}
                                          nombre={grup.nombre}
                                          valor={libs.formatNumber(
                                            saldosPorGrupos.filter(
                                              (e) => e.grupo == grup.grupo
                                            )[0]?.saldoTotal
                                          )}
                                        >
                                          <>
                                            {grup.cuentas.map(
                                              (cuenta, key3) => {
                                                return (
                                                  <>
                                                    {saldosPorCuentas.filter(
                                                      (e) =>
                                                        e.cuenta ==
                                                        cuenta.cuentas
                                                    )[0]?.saldoTotal > 0 && (
                                                      <>
                                                        <CuentasEEFF
                                                          key={key3}
                                                          codigo={
                                                            cuenta.cuentas
                                                          }
                                                          nombre={cuenta.nombre}
                                                          valor={libs.formatNumber(
                                                            saldosPorCuentas.filter(
                                                              (e) =>
                                                                e.cuenta ==
                                                                cuenta.cuentas
                                                            )[0]?.saldoTotal
                                                          )}
                                                        />
                                                      </>
                                                    )}
                                                  </>
                                                  // aquii
                                                );
                                              }
                                            )}
                                          </>
                                        </GrupossEEFF>
                                      </>
                                    )}
                                  </>
                                );
                              })}
                            </>
                          </ClasessEEFF>
                        </>
                      ) : null}
                    </>
                  );
                })}
                <Aux
                  codigo={""}
                  nombre={"PASIVO MAS PATRIMONIO"}
                  valor={libs.formatNumber(totales?.pasivoMasPatrimonio)}
                />
              </>
            </>
          )}
        </Box>
      </div>
    </LayoutPrivate>
  );
};

export default id;
