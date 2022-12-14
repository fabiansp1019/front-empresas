import React, {useEffect, useState} from 'react'
import HojaVida from '../../../components/HojaVida'
import axios from "axios";
import libs from "../../../libs/util";
import cookie from "js-cookie";

// import data from '../../../data.json'

const hojadevida = () => {

  const [datosHojaVida, setDatosHojaVida] = useState([])

  useEffect(async ()=>{
    const token = cookie.get("__session");
    const result = await axios({
      method: "get",
      url: libs.location() + "api/hojavida",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    // console.log(result.data)
    setDatosHojaVida(result.data)
  },[])



  const style = {
    car:800,
    row1:1,
    row2:10
  }
  return (
    <>
        <HojaVida data={datosHojaVida[0]}  style={style} />
    </>
  )
}



export default hojadevida