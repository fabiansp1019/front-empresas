import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import LayoutPrivate from "../../../components/Layoutprivate";

const plandecuentas = () => {
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
                    Clase : {estado.clase} - {estado.nombre}
                    {/*  console.log(dataa.find({clase: '5'}))  */}
                  </li>
                  <ul>
                    {estado.grupos.map((grup) => {
                      return (
                        <>
                          <li>
                            grupo: {grup.grupo} - {grup.nombre}
                          </li>
                          <ul>
                            {grup.cuentas.map((cuenta) => {
                              return (
                                <>
                                  <li>
                                    cuenta: {cuenta.cuentas} - {cuenta.nombre}
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
                                // aquii
                              );
                            })}
                          </ul>
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

export default plandecuentas;
