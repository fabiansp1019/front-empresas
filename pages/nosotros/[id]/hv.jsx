import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HojaVida from "../../../components/HojaVida";
import axios from "axios";
import libs from "../../../libs/util";

const hojaVida = () => {
  const Route = useRouter();
  const [hojasDeVidas, setHojasDeVidas] = useState([]);

  useEffect(async () => {
    const result = await axios({
      method: "get",
      url: libs.location() + "api/hojadevida",
    });
    setHojasDeVidas(result.data);
  }, []);

  const info = hojasDeVidas.find((elemento) => (elemento = Route.query.id));

  const style = {
    car: 800,
    row1: 2,
    row2: 8,
  };

  return (
    <>
      <HojaVida data={info} style={style} />
    </>
  );
};

export default hojaVida;
