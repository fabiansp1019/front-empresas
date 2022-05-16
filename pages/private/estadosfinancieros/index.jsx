import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import LayoutPrivate from "../../../components/Layoutprivate";
import libs from "../../../libs/util";

const index = () => {
  const [estadosFinancieros, setEstadosFinancieros] = useState([]);
  const [dataa, setDataa] = useState([]);
  const [saldosPorGrupos, setSaldosPorGrupos] = useState([]);
  const [saldosPorCuentas, setSaldosPorCuentas] = useState([]);

  const getdata = async () => {
    const req = await axios({
      method: "get",
      url: "http://localhost:4000/api/listarclases",
      headers: {
        authorization: window.localStorage.getItem("loggedApp"),
      },
    });
    setEstadosFinancieros(req.data.lista);
    // setDataa(req.data.auxiliares);
    // console.log(req.data.auxiliares);

    //SALDO POR CLASE
    const miCarritoSinDuplicados = req.data.auxiliares.reduce(
      (acumulador, valorActual) => {
        const elementoYaExiste = acumulador.find(
          (elemento) => elemento.clase === valorActual.clase
        );
        if (elementoYaExiste) {
          return acumulador.map((elemento) => {
            if (elemento.clase === valorActual.clase) {
              return {
                ...elemento,
                saldoTotal: elemento.saldo + valorActual.saldo,
              };
            }
            return elemento;
          });
        }

        const tot = {
          clase: valorActual.clase,
          saldo: valorActual.saldo,
        };

        //  console.log(tot);
        return [...acumulador, tot]; //[...acumulador, valorActual];
      },
      []
    );
    setDataa(miCarritoSinDuplicados);

    // SALDOS POR GRUPOS
    const saldosPorGrupo = req.data.auxiliares.reduce(
      (acumulador, valorActual) => {
        const elementoYaExiste = acumulador.find(
          (elemento) => elemento.grupo === valorActual.grupo
        );
        if (elementoYaExiste) {
          return acumulador.map((elemento) => {
            if (elemento.grupo === valorActual.grupo) {
              return {
                ...elemento,
                saldoTotal: elemento.saldo + valorActual.saldo,
              };
            }
            return elemento;
          });
        }

        const tot = {
          grupo: valorActual.grupo,
          saldo: valorActual.saldo,
        };

        //  console.log(tot);
        return [...acumulador, tot]; //[...acumulador, valorActual];
      },
      []
    );
    setSaldosPorGrupos(saldosPorGrupo);
    // console.log(saldosPorGrupo)

    // SALDOS POR CUENTAS
    const saldosPorCuentas = req.data.auxiliares.reduce(
      (acumulador, valorActual) => {
        const elementoYaExiste = acumulador.find(
          (elemento) => elemento.cuenta === valorActual.cuenta
        );
        if (elementoYaExiste) {
          return acumulador.map((elemento) => {
            if (elemento.cuenta === valorActual.cuenta) {
              return {
                ...elemento,
                saldoTotal: elemento.saldo + valorActual.saldo,
              };
            }
            return elemento;
          });
        }

        const tot = {
          cuenta: valorActual.cuenta,
          saldo: valorActual.saldo,
        };

        //  console.log(tot);
        return [...acumulador, tot]; //[...acumulador, valorActual];
      },
      []
    );
    setSaldosPorCuentas(saldosPorCuentas);
    // console.log(saldosPorCuentas)
  };

  useEffect(() => {
    getdata();
    // console.log(saldos());
  }, []);

  // if(dataa){
  //   const valor = dataa.find({clase: "1"}).clase;
  //   console.log(valor);
  // }

  // console.log(estadosFinancieros.filter((e) => e.clase == "1"));

  return (
    <LayoutPrivate>
      <div>
        <div>
          <Link href={"/private/estadosfinancieros/agregargrupos"}>
            <a>agregar grupos</a>
          </Link>
          <Link href={"/private/estadosfinancieros/plandecuentas"}>
            <a>Plan de Cuentas</a>
          </Link>

        </div>

        <div>
          <ul>
            {estadosFinancieros.map((estado) => {
              return (
                <>
                  <li>
                    {" "}
                    Clase : {estado.clase} - {estado.nombre} - Total :
                    {libs.formatNumber(
                      dataa.filter((e) => e.clase == estado.clase)[0]
                        ?.saldoTotal
                    )}
                    {/*  console.log(dataa.find({clase: '5'}))  */}
                  </li>
                  <ul>
                    {estado.grupos.map((grup) => {
                      return (
                        <>
                          {saldosPorGrupos.filter(
                            (e) => e.grupo == grup.grupo
                          )[0]?.saldoTotal > 0 && (
                            <>
                              <li>
                                grupo: {grup.grupo} - {grup.nombre} - Total :
                                {libs.formatNumber(
                                  saldosPorGrupos.filter(
                                    (e) => e.grupo == grup.grupo
                                  )[0]?.saldoTotal
                                )}
                              </li>
                              <ul>
                                {grup.cuentas.map((cuenta) => {
                                  return (
                                    <>
                                      {saldosPorCuentas.filter(
                                        (e) => e.cuenta == cuenta.cuentas
                                      )[0]?.saldoTotal > 0 && (
                                        <>
                                          <li>
                                            cuenta: {cuenta.cuentas} -{" "}
                                            {cuenta.nombre} - Total :
                                            {libs.formatNumber(
                                              saldosPorCuentas.filter(
                                                (e) =>
                                                  e.cuenta == cuenta.cuentas
                                              )[0]?.saldoTotal
                                )}
                                          </li>
                                          {/* <ul>
                                            {cuenta.subcuentas.map(
                                              (subcuenta) => {
                                                return (
                                                  <>
                                                    <li>
                                                      sub Cuenta:{" "}
                                                      {subcuenta.subcuentas} -{" "}
                                                      {subcuenta.nombre}
                                                    </li>
                                                  </>
                                                );
                                              }
                                            )}
                                          </ul> */}
                                        </>
                                      )}
                                    </>
                                    // aquii
                                  );
                                })}
                              </ul>
                            </>
                          )}
                        </>
                      );
                    })}
                  </ul>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </LayoutPrivate>
  );
};

export default index;
