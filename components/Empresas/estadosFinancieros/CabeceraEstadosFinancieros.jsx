import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import libs from "../../../libs/util";
import { useAuth } from "../../../libs/auth";

const CabeceraEstadosFinancieros = ({name}) => {
  const [data, setData] = React.useState([]);
  const router = useRouter();
  const { getAuthHeaders } = useAuth();
  const { id } = router.query;

  const getdata = async () => {
    const res = await axios({
      method: "post",
      url: libs.location() + "api/buscarempresa",
      headers: getAuthHeaders(),
      data: {
        id,
      },
    });
    setData(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div>{data?.razonSocial}</div>
      <div>{data?.nit}</div>
      <div>{name}</div>
      <div>A 31 DE DICIEMBRE DEL 2021</div>
    </>
  );
};

export default CabeceraEstadosFinancieros;
