import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import libs from "../../../libs/util";
import { useAuth } from "../../../libs/auth";
import Typography from "@mui/material/Typography";

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
      <div><Typography variant="eeff">{data?.razonSocial}</Typography></div>
      <div><Typography variant="eeff">{data?.nit}</Typography></div>
      <div><Typography variant="eeff">{name}</Typography></div>
      <div><Typography variant="eeff">A 31 DE DICIEMBRE DEL 2021</Typography></div>
    </>
  );
};

export default CabeceraEstadosFinancieros;
