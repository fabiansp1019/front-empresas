import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const CabeceraEstadosFinancieros = ({name}) => {
  const [data, setData] = React.useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getdata = async () => {
    const res = await axios({
      method: "post",
      url: "http://localhost:4000/api/buscarempresa",
      headers: {
        authorization: window.localStorage.getItem("loggedApp"),
      },
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
