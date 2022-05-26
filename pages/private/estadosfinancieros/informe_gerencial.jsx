import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutPrivate from "../../../components/Layoutprivate";
import libs from "../../../libs/util";
import Nav_Estados_Financieros from "../../../components/Empresas/estadosFinancieros/Nav_Estados_Financieros";
import CabeceraEstadosFinancieros from "../../../components/Empresas/estadosFinancieros/CabeceraEstadosFinancieros";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {
  Document,
  Page,
  Text,
  View,
  Image,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
import { Button } from "@material-ui/core";

// export const ClasessEEFF = ({ codigo, nombre, valor, children }) => {
//   return (
//     <>
//       <Box
//         sx={{
//           width: "59vw",
//           background: "#f5f5f5",
//           margin: "none",
//           border: "0px",
//         }} //p: 2, border: "1px dashed grey",
//       >
//         <>
//           <Grid container spacing={1}>
//             <Grid item xs={2}>
//               <Typography align="justify" variant="h7">
//                 {codigo}
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography align="left" variant="h7">
//                 {nombre.toUpperCase()}
//               </Typography>
//             </Grid>
//             <Grid item xs={4}>
//               <Typography align="left" variant="h7"></Typography>
//             </Grid>
//             <Grid item xs={12}></Grid>
//             <Grid item xs={12}>
//               {children}
//             </Grid>
//             {/* inicia otra fila  */}
//             <Grid item xs={2}></Grid>
//             <Grid item xs={6}>
//               <Typography align="left" variant="h7">
//                 <strong>TOTAL {nombre.toUpperCase()}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={4}>
//               <Typography align="right" variant="h6">
//                 <strong>{valor}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={12}></Grid>
//             <Grid item xs={12}></Grid>
//           </Grid>
//         </>
//       </Box>
//     </>
//   );
// };

// export const GrupossEEFF = ({ codigo, nombre, valor, children }) => {
//   return (
//     <>
//       <Box
//         sx={{ width: "59vw", backgroundColor: "#f5f5f5" }} //p: 2, border: "1px dashed grey",
//       >
//         <>
//           <Grid container spacing={1}>
//             {/* inicia una columna */}
//             <Grid item xs={2}>
//               <Typography align="left" variant="h7">
//                 {codigo}
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography align="left" variant="h7">
//                 {nombre.toUpperCase()}
//               </Typography>
//             </Grid>
//             <Grid item xs={4}>
//               {/* finaliza una column */}
//               <Typography align="left" variant="h7"></Typography>
//             </Grid>
//             <Grid item xs={12}></Grid>
//             {/* aqui van las cuentas */}
//             <Grid item xs={12}>
//               {children}
//             </Grid>
//             {/* inicia otra fila  */}
//             <Grid item xs={2}></Grid>
//             <Grid item xs={6}>
//               <Typography align="left" variant="h7">
//                 <strong>TOTAL {nombre.toUpperCase()}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={4}>
//               <Typography align="right" variant="h6">
//                 <strong>{valor}</strong>
//               </Typography>
//             </Grid>
//           </Grid>
//         </>
//       </Box>
//     </>
//   );
// };
// export const CuentasEEFF = ({ codigo, nombre, valor }) => {
//   return (
//     <>
//       <Box
//         sx={{
//           width: "59vw",
//           border: 0,
//           background: "#f5f5f5",
//           // "&:hover": {
//           //   backgroundColor: "#C3F9FF",
//           //   opacity: [0.9, 0.8, 0.7],
//           // },
//         }} //p: 2, border: "1px dashed grey",
//       >
//         <>
//           <Grid container spacing={1}>
//             <Grid item xs={2}>
//               <Typography align="left" variant="h7">
//                 {codigo}
//               </Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Typography align="left" variant="h7">
//                 {nombre.toUpperCase()}
//               </Typography>
//             </Grid>
//             <Grid item xs={4}>
//               <Typography align="right" variant="h6">
//                 {valor}
//               </Typography>
//             </Grid>
//           </Grid>
//         </>
//       </Box>
//     </>
//   );
// };
// export const Aux = ({ codigo, nombre, valor, children }) => {
//   return (
//     <>
//       <Box
//         sx={{
//           width: "59vw",
//           background: "#f5f5f5",
//           margin: "none",
//           border: "0px",
//         }} //p: 2, border: "1px dashed grey",
//       >
//         <>
//           <Grid container spacing={1}>
//             <Grid item xs={2}></Grid>
//             <Grid item xs={6}>
//               <Typography align="left" variant="h7">
//                 <strong>{nombre?.toUpperCase()}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={4}>
//               <Typography align="right" variant="h6">
//                 <strong>{valor}</strong>
//               </Typography>
//             </Grid>
//             <Grid item xs={12}></Grid>
//             <Grid item xs={12}></Grid>
//           </Grid>
//         </>
//       </Box>
//     </>
//   );
// };

// const EstadoDeResultado = () => {
//   const [estadosFinancieros, setEstadosFinancieros] = useState([]);
//   const [dataa, setDataa] = useState([]);
//   const [saldosPorGrupos, setSaldosPorGrupos] = useState([]);
//   const [saldosPorCuentas, setSaldosPorCuentas] = useState([]);
//   const [totales, setTotales] = useState([]);

//   const getdata = async () => {
//     const req = await axios({
//       method: "get",
//       url: "http://localhost:4000/api/listarclases",
//       headers: {
//         authorization: window.localStorage.getItem("loggedApp"),
//       },
//     });
//     setEstadosFinancieros(req.data.lista);
//     setDataa(req.data.saldoPorClase);
//     setSaldosPorGrupos(req.data.saldosPorGrupo);
//     setSaldosPorCuentas(req.data.saldosPorCuentas);
//     setTotales(req.data.valores_adicionales);
//   };

//   useEffect(() => {
//     getdata();
//   }, []);

//   return (
//     <LayoutPrivate nav={<Nav_Estados_Financieros />}>
//       <div>
//         <div>
//           <Box
//             sx={{ width: "59vw" }} //p: 2, border: "1px dashed grey",
//           >
//             <>
//               <Grid container spacing={2}>
//                 <Grid item xs={3}>
//                   <Typography align="left" variant="h6"></Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography align="center" variant="h6">
//                     <CabeceraEstadosFinancieros name={"ESTADO DE RESULTADO"} />
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={3}>
//                   <Typography align="rigth" variant="h6"></Typography>
//                 </Grid>
//               </Grid>
//             </>
//           </Box>

//           <>
//             {estadosFinancieros.map((estado, key) => {
//               return (
//                 <>
//                   {(estado.clase !== "1") &
//                   (estado.clase !== "2") &
//                   (estado.clase !== "3") ? (
//                     <>
//                       {dataa.filter((e) => e.clase == estado.clase)[0]
//                         ?.saldoTotal > 0 && (
//                         <>
//                           <ClasessEEFF
//                             key={key + 10}
//                             codigo={estado.clase}
//                             nombre={estado.nombre}
//                             valor={libs.formatNumber(
//                               dataa.filter((e) => e.clase == estado.clase)[0]
//                                 ?.saldoTotal
//                             )}
//                           >
//                             <>
//                               {estado.grupos.map((grup) => {
//                                 return (
//                                   <>
//                                     {saldosPorGrupos.filter(
//                                       (e) => e.grupo == grup.grupo
//                                     )[0]?.saldoTotal > 0 && (
//                                       <>
//                                         <GrupossEEFF
//                                           codigo={grup.grupo}
//                                           nombre={grup.nombre}
//                                           valor={libs.formatNumber(
//                                             saldosPorGrupos.filter(
//                                               (e) => e.grupo == grup.grupo
//                                             )[0]?.saldoTotal
//                                           )}
//                                         >
//                                           <>
//                                             {grup.cuentas.map((cuenta) => {
//                                               return (
//                                                 <>
//                                                   {saldosPorCuentas.filter(
//                                                     (e) =>
//                                                       e.cuenta == cuenta.cuentas
//                                                   )[0]?.saldoTotal > 0 && (
//                                                     <>
//                                                       <CuentasEEFF
//                                                         codigo={cuenta.cuentas}
//                                                         nombre={cuenta.nombre}
//                                                         valor={libs.formatNumber(
//                                                           saldosPorCuentas.filter(
//                                                             (e) =>
//                                                               e.cuenta ==
//                                                               cuenta.cuentas
//                                                           )[0]?.saldoTotal
//                                                         )}
//                                                       />
//                                                     </>
//                                                   )}
//                                                 </>
//                                                 // aquii
//                                               );
//                                             })}
//                                           </>
//                                         </GrupossEEFF>
//                                       </>
//                                     )}
//                                   </>
//                                 );
//                               })}
//                             </>
//                           </ClasessEEFF>
//                         </>
//                       )}
//                     </>
//                   ) : null}
//                 </>
//               );
//             })}
//             <Aux
//               codigo={""}
//               nombre={"UTILIDAD ANTES DE IMPUESTO"}
//               valor={libs.formatNumber(totales.utilidad)}
//             />
//             <Aux
//               codigo={""}
//               nombre={"IMPUESTO"}
//               valor={libs.formatNumber(totales.impuesto)}
//             />
//             <Aux
//               codigo={""}
//               nombre={"UTILIDAD NETA DESPUES DE IMPUESTO"}
//               valor={libs.formatNumber(totales.utilidadDespuesDeImpuesto)}
//             />
//           </>
//         </div>
//       </div>
//     </LayoutPrivate>
//   );
// };

const TestPdf = () => {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text>Hola Mundo</Text>
      </Page>
    </Document>
  );
};

const informe_gerencial = () => {
  const [verPDF, setVerPDF] = React.useState(false);

  return (
    <LayoutPrivate>
      {verPDF ? (
        <>
          {/* <div>
            <Button onClick={() => setVerPDF(false)}>Cerrar</Button>
          </div> */}
          <div>
            <PDFViewer style={{ width: "100vw", height: "90vh" }}>
              <TestPdf />
            </PDFViewer>
          </div>
        </>
      ) : (
        <>
          <Button onClick={() => setVerPDF(true)}>verPDF</Button>
        </>
      )}
    </LayoutPrivate>
  );
};

export default informe_gerencial;
