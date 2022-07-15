import React, {useEffect, useState} from 'react'
import HojaVida from '../../../components/HojaVida'
import LayoutP from "../../../components/Layoutprivate";
import axios from "axios";
import libs from "../../../libs/util";
import { useAuth } from "../../../libs/auth";


// import data from '../../../data.json'

const hojadevida = () => {

  const { getAuthHeaders } = useAuth();
  const [datosHojaVida, setDatosHojaVida] = useState([])

  useEffect(async ()=>{
    const result = await axios({
      method: "get",
      url: libs.location() + "api/hojavida",
      headers: getAuthHeaders(),
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
    <LayoutP>
        <HojaVida data={datosHojaVida[0]}  style={style} />
    </LayoutP>
  )
}



export default hojadevida