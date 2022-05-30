import React from "react";
import libs from "../../../libs/util";
import FIRMA_PDF from "./FIRMA_PDF";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";



const Clase = ({ codigo, nombre, valor, children }) => {
  return (
    <>
      <View style={styles.sectionColumn}>
        <View style={styles.sectionCelda1}>
          <Text style={styles.textClase}>{codigo}</Text>
        </View>
        <View style={styles.sectionCelda2}>
          <Text style={styles.textClase}>{nombre.toUpperCase()}</Text>
        </View>
        <View style={styles.sectionCelda3}>
          <Text style={styles.textClase}></Text>
        </View>
      </View>
      <View>{children}</View>
      <View style={styles.sectionColumn}>
        <View style={styles.sectionCelda1}>
          <Text style={styles.textClase}></Text>
        </View>
        <View style={styles.sectionCelda2}>
          <Text style={styles.textClase}>TOTAL {nombre.toUpperCase()}</Text>
        </View>
        <View style={styles.sectionCelda3}>
          <Text style={styles.textClase}>{valor}</Text>
        </View>
      </View>
    </>
  );
};
const Grupo = ({ codigo, nombre, valor, children }) => {
  return (
    <>
      <View style={styles.sectionColumnGrup}>
        <View style={styles.sectionCelda1}>
          <Text style={styles.textGrupo}>{codigo}</Text>
        </View>
        <View style={styles.sectionCelda2}>
          <Text style={styles.textGrupo}>{nombre.toUpperCase()}</Text>
        </View>
        <View style={styles.sectionCelda3}>
          <Text style={styles.textGrupo}></Text>
        </View>
      </View>
      <View>{children}</View>
      <View style={styles.sectionColumnGrup}>
        <View style={styles.sectionCelda1}>
          <Text style={styles.textGrupo}></Text>
        </View>
        <View style={styles.sectionCelda2}>
          <Text style={styles.textGrupo}>TOTAL {nombre.toUpperCase()}</Text>
        </View>
        <View style={styles.sectionCelda3}>
          <Text style={styles.textGrupo}>{valor}</Text>
        </View>
      </View>
    </>
  );
};

const Cuenta = ({ codigo, nombre, valor }) => {
  return (
    <View style={styles.sectionColumnCuenta}>
      <View style={styles.sectionCelda1}>
        <Text style={styles.textCuenta}>{codigo}</Text>
      </View>
      <View style={styles.sectionCelda2}>
        <Text style={styles.textCuenta}>{nombre.toUpperCase()}</Text>
      </View>
      <View style={styles.sectionCelda3}>
        <Text style={styles.textCuenta}>{valor}</Text>
      </View>
    </View>
  );
};

const Encabezado = ({ concepto }) => {

  return (
    <>
      <View
        style={{
          width: "100%",
          // color: "blue",
          paddingBottom: 1,
          paddingTop: 1,
          paddingLeft: 0,
          paddingRight: 0,
          backgroundColor: "white",
          // display: "flex",
          // flexDirection: "row",
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {concepto}
          </Text>
        </View>
      </View>
    </>
  );
};

const PDF = ({
  estadosFinancieros,
  dataa,
  saldosPorCuentas,
  saldosPorGrupos,
  encabezado,
  totales
}) => {

  return (
    <Document>
      <Page size="A4" backgroundColor="gray" style={styles.body}>
        <View style={{ display: "block" }}>
          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              paddingLeft: 60,
              paddingRight: 60,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 2, padding:0 }}>
            {encabezado?.url && (
              <Image style={{height: 70}} src={encabezado?.url} />
              )}
            </View>
            <View style={{ flex: 3 }}>
              <Encabezado concepto={encabezado?.razonsocial} />
              <Encabezado concepto={encabezado?.nit} />
              <Encabezado concepto={encabezado?.periodo} />
              <Encabezado concepto={encabezado?.estadoFinanciero} />
              <Encabezado concepto={encabezado?.cifras} />
            </View>
          </View>
          <Encabezado concepto="" />
        </View>
        {estadosFinancieros.map((estado, key) => {
          return (
            <>
              {(estado.clase !== "1") &
              (estado.clase !== "2") &
              (estado.clase !== "3") ? (
                <>
                  {dataa.filter((e) => e.clase == estado.clase)[0]?.saldoTotal >
                    0 && (
                    <>
                      <Clase
                        key={key + 1}
                        codigo={estado.clase}
                        nombre={estado.nombre}
                        valor={libs.formatNumber(
                          dataa.filter((e) => e.clase == estado.clase)[0]
                            ?.saldoTotal
                        )}
                      >
                        <View style={{ display: "block" }}>
                          {estado.grupos.map((grup, key) => {
                            return (
                              <>
                                {saldosPorGrupos.filter(
                                  (e) => e.grupo == grup.grupo
                                )[0]?.saldoTotal > 0 && (
                                  <>
                                    <Grupo
                                    key={key + 1}
                                      codigo={grup.grupo}
                                      nombre={grup.nombre}
                                      valor={libs.formatNumber(
                                        saldosPorGrupos.filter(
                                          (e) => e.grupo == grup.grupo
                                        )[0]?.saldoTotal
                                      )}
                                    >
                                      <View style={{ display: "block" }}>
                                        {grup.cuentas.map((cuenta, key) => {
                                          return (
                                            <>
                                              {saldosPorCuentas.filter(
                                                (e) =>
                                                  e.cuenta == cuenta.cuentas
                                              )[0]?.saldoTotal > 0 && (
                                                <>
                                                  <Cuenta
                                                    key={key + 1}
                                                    codigo={cuenta.cuentas}
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
                                          );
                                        })}
                                      </View>
                                    </Grupo>
                                  </>
                                )}
                              </>
                            );
                          })}
                        </View>
                      </Clase>
                    </>
                  )}
                </>
              ) : null}
            </>
          );
        })}
        
        <View style={styles.sectionColumnGrup}>
        <View style={styles.sectionCelda1}>
          <Text style={styles.textClase}></Text>
        </View>
        <View style={styles.sectionCelda2}>
          <Text style={styles.textClase}>UTILIDAD ANTES DE IMPUESTO</Text>
        </View>
        <View style={styles.sectionCelda3}>
          <Text style={styles.textClase}>{libs.formatNumber(totales?.utilidad)}</Text>
        </View>
      </View>

      <View style={styles.sectionColumnGrup}>
        <View style={styles.sectionCelda1}>
          <Text style={styles.textClase}></Text>
        </View>
        <View style={styles.sectionCelda2}>
          <Text style={styles.textClase}>IMPUESTO</Text>
        </View>
        <View style={styles.sectionCelda3}>
          <Text style={styles.textClase}>{libs.formatNumber(totales?.impuesto)}</Text>
        </View>
      </View>

      <View style={styles.sectionColumnGrup}>
        <View style={styles.sectionCelda1}>
          <Text style={styles.textClase}></Text>
        </View>
        <View style={styles.sectionCelda2}>
          <Text style={styles.textClase}>UTILIDAD DESPUES DE IMPUESTO</Text>
        </View>
        <View style={styles.sectionCelda3}>
          <Text style={styles.textClase}>{libs.formatNumber(totales?.utilidadDespuesDeImpuesto)}</Text>
        </View>
      </View>
      <FIRMA_PDF />
      </Page>
    </Document>
  );
};



export default PDF;



export const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  encabezado: {
    width: "100%",
    // color: "blue",
    paddingBottom: 0,
    paddingTop: 0,
    // paddingLeft: 60,
    // paddingRight: 60,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
  },
  sectionColumn: {
    width: "100%",
    // color: "blue",
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
  },
  sectionColumnGrup: {
    width: "100%",
    // color: "blue",
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
  },
  sectionColumnCuenta: {
    width: "100%",
    // color: "blue",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
  },
  sectionCelda1: {
    color: "black",
    backgroundColor: "white",
    flex: 1,
  },
  sectionCelda2: {
    color: "black",
    backgroundColor: "white",
    flex: 3,
  },
  sectionCelda3: {
    color: "black",
    backgroundColor: "white",
    flex: 1,
    textAlign: "right",
  },
  textClase: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
  textGrupo: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
  textCuenta: {
    color: "black",
    fontSize: 12,
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 100,
  },
});