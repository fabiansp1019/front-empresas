import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Button } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import axios from "axios";
import { useAuth } from '../../libs/auth'
import libs from '../../libs/util'
import Alert from '@mui/material/Alert';
import {
  CREAREMPRESA
} from "../../graphql/queries";
import cookie from 'js-cookie';

export default function crear_empresa() {
  const [razonSocial, setRazonSocial] = React.useState('');
  const [nitEmpresa, setNitEmpresa] = React.useState('');
  const [digitoVerificacion, setDigitoVerificacion] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const [ciudad, setCiudad] = React.useState('');
  const [comentario, setComentario] = React.useState('');

  const [comentarioMessageBool, setComentarioMessageBool] = React.useState(false)
  const [comentarioMessage, setComentarioMessage] = React.useState('')
  const [tipoMensaje, setTipoMensaje] = React.useState('')





  const registrarEmpresa = async () => {
    //console.log(razonSocial + " " + nitEmpresa + " " + digitoVerificacion + " " + direccion + " " + ciudad + " " + comentario);

    const token = cookie.get("__session");

    const alerta = (estado, mensaje, tipoDeMensaje) => {
      setComentarioMessageBool(estado)
      setComentarioMessage(mensaje)
      setTipoMensaje(tipoDeMensaje)
      setTimeout(() => {
        setComentarioMessageBool(false)
        setComentarioMessage('')
        setTipoMensaje('')
      }, 3000)
    }


    const variables = {
      nit: nitEmpresa,
      digitoVerificacion: digitoVerificacion,
      razonSocial: razonSocial,
      direccion: direccion,
      ciudad: ciudad,
      body: comentario
    }

    if (
      razonSocial !== '' &&
      nitEmpresa !== '' &&
      digitoVerificacion !== '' &&
      direccion !== '' &&
      ciudad !== '' &&
      comentario
    ) {

      const req = await axios({
        method: "post",
        url: libs.location() + "api/crearempresa",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: variables
      });

      setRazonSocial('');
      setNitEmpresa('');
      setDigitoVerificacion('');
      setDireccion('');
      setCiudad('');
      setComentario('');

      document.getElementById("RazonSocial").value = "";
      document.getElementById("NitEmpresa").value = "";
      document.getElementById("DigitoVerificacion").value = "";
      document.getElementById("Direccion").value = "";
      document.getElementById("Ciudad").value = "";
      document.getElementById("Comentario").value = "";

      if(req.status == 200){
        alerta(true, String(req.data), 'success')
      }
      else{
        alerta(true, String(req.data), 'error')
      }
    } else {
      alerta(true, 'Los campos deben estar completos!', 'error')
    }


  };


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField
          id="RazonSocial"
          sx={{ m: 1, width: '50ch' }}
          onChange={(e) => setRazonSocial(e.target.value)}
          required={true}
          InputProps={{
            startAdornment: <InputAdornment position="start">Razon Social</InputAdornment>,
          }}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <TextField
            id="NitEmpresa"
            onChange={(e) => setNitEmpresa(e.target.value)}
            type="number"
            required={true}
            InputProps={{
              startAdornment: <InputAdornment position="start">NIT</InputAdornment>,
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <TextField
            id="DigitoVerificacion"
            type={'number'}
            required={true}
            onChange={(e) => setDigitoVerificacion(e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start">DV</InputAdornment>,
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
          <TextField
            id="Direccion"
            onChange={(e) => setDireccion(e.target.value)}
            required={true}
            InputProps={{
              startAdornment: <InputAdornment position="start">DIRECCION</InputAdornment>,
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
          <TextField
            id="Ciudad"
            onChange={(e) => setCiudad(e.target.value)}
            required={true}
            InputProps={{
              startAdornment: <InputAdornment position="start">CIUDAD</InputAdornment>,
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
          <TextField
            id="Comentario"
            onChange={(e) => setComentario(e.target.value)}
            required={true}
            InputProps={{
              startAdornment: <InputAdornment position="start">COMENTARIO</InputAdornment>,
            }}
          />
        </FormControl>
        <FormControl>
          <Button onClick={() => registrarEmpresa()}><AddCircleOutlineOutlinedIcon /></Button>
        </FormControl>

        {
          comentarioMessageBool && (<>
            <Alert severity={tipoMensaje}>{comentarioMessage}</Alert>
          </>)
        }
      </div>

    </Box>
  );
}