import React from "react";
import { useRouter } from "next/router";
import Alert from '@mui/material/Alert';
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Paper from "@mui/material/Paper";
import Button from "@material-ui/core/Button";

import { useMutation } from "@apollo/client";
import { CREAR_CLAVE, CREAR_IMPUESTO } from "../../../graphql/queries";

export const Claves = ({ id }) => {
  const [nombreEntidad, setNombreEntidad] = React.useState("");
  const [usuario, setUsuario] = React.useState("");
  const [contrasenna, setContrasenna] = React.useState("");
  const [comentario, setComentario] = React.useState("");

  const [crearClave, { loading, error }] = useMutation(CREAR_CLAVE);
  const router = useRouter();

  // variables para los mensajes de los estados de las peticiones
  const [comentarioMessageBool, setComentarioMessageBool] = React.useState(false)
  const [comentarioMessage, setComentarioMessage] = React.useState('')
  const [tipoMensaje, setTipoMensaje] = React.useState('')
  // funcion para reutilizar en los mensajes de estados
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


  const guardarClave = () => {
    // console.log(id, nombreEntidad, usuario, contrasenna, comentario)
    if (
      id === "" ||
      nombreEntidad === "" ||
      usuario === "" ||
      contrasenna === "" ||
      comentario === ""
    ) {
      alert("Todos los campos son obligatorios");
    } else {
      crearClave({
        variables: {
          empresaId: id,
          entidad: nombreEntidad,
          usuario: usuario,
          contrasenna: contrasenna,
          comentario: comentario,
        },
      });
      // router.push("/");
      if (loading) {
        return "loading";
      }
      if (error) {
        return <NoAutorizado />;
      }

        alerta(true, 'Los datos fueron guardados exitosamente', 'success')

      setNombreEntidad("");
      setUsuario("");
      setContrasenna("");
      setComentario("");
      document.getElementById("nombreEntidad").value = "";
      document.getElementById("usuario").value = "";
      document.getElementById("contraseña").value = "";
      document.getElementById("comentario").value = "";
    }
  };
  return (
    <>
      <Box sx={{ m: 2 }}>
        <h3>Agregar Clave</h3>
        <Paper>
        <form sx={{ width: "25%", margin: '1rem' }} autoComplete="off">
            <div>
          <TextField
            id="nombreEntidad"
            variant="filled"
            label="Nombre Entidad"
            onChange={(e) => setNombreEntidad(e.target.value)}
          />
          <TextField
            id="usuario"
            variant="filled"
            label="Usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <TextField
            id="contraseña"
            variant="filled"
            label="Contraseña"
            onChange={(e) => setContrasenna(e.target.value)}
          />
          <TextField
            id="comentario"
            variant="filled"
            label="Comentario"
            onChange={(e) => setComentario(e.target.value)}
          />
          <Button onClick={guardarClave} variant="contained" color="primary">
            Guardar
          </Button>
          </div>
          </form>
        </Paper>

        {
          comentarioMessageBool && (<>
            <Alert severity={tipoMensaje}>{comentarioMessage}</Alert>
          </>)
        }
      </Box>
    </>
  );
};
export const Impuestos = ({ id }) => {
  const [nombreImpuesto, setNombreImpuesto] = React.useState("");
  const [comentario, setComentario] = React.useState("");
  const router = useRouter();
  const [crearImpuesto, { loading, error }] = useMutation(CREAR_IMPUESTO);

  // variables para los mensajes de los estados de las peticiones
  const [comentarioMessageBool, setComentarioMessageBool] = React.useState(false)
  const [comentarioMessage, setComentarioMessage] = React.useState('')
  const [tipoMensaje, setTipoMensaje] = React.useState('')
  // funcion para reutilizar en los mensajes de estados
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

  const guardarImpuesto = () => {
    if (id === "" || nombreImpuesto === "" || comentario === "") {
      alert("Todos los campos son obligatorios");
    } else {
      crearImpuesto({
        variables: {
          empresaId: id,
          impuesto: nombreImpuesto,
          comentario: comentario,
        },
      });
      // router.reload()

      alerta(true, 'Los datos fueron guardados exitosamente', 'success')


      document.getElementById("impuesto").value = "";
      document.getElementById("comentario").value = "";
    }
  };
  return (
    <>
      <Box sx={{ m: 2 }}>
        <h3>Agregar Responsabilidad</h3>
        <Paper>
          <form sx={{ width: "25%", margin: '1rem' }} autoComplete="off">
            <div>
            <TextField
              id="impuesto"
              variant="filled"
              label="Nombre Impuesto"
              onChange={(e) => setNombreImpuesto(e.target.value)}
            />
            <TextField
              id="comentario"
              variant="filled"
              label="Comentario"
              onChange={(e) => setComentario(e.target.value)}
            />
            </div>
          </form>
          <Button onClick={guardarImpuesto} variant="contained" color="primary">
            Guardar
          </Button>
        </Paper>

        {
          comentarioMessageBool && (<>
            <Alert severity={tipoMensaje}>{comentarioMessage}</Alert>
          </>)
        }
      </Box>
    </>
  );
};

const Agregar_Claves = () => {
  const { query } = useRouter();
  const [cambiar, setCambiar] = React.useState("clave");

  const id = query.info;

  const [alignment, setAlignment] = React.useState("left");



  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // console.log(data)

  return (
    <>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          value="left"
          aria-label="left aligned"
          onClick={() => setCambiar("clave")}
        >
          <LockIcon />
        </ToggleButton>
        <ToggleButton
          value="rigth"
          aria-label="centered"
          onClick={() => setCambiar("impuesto")}
        >
          <AlternateEmailIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      {cambiar === "clave" ? <Claves id={id} /> : <Impuestos id={id} />}

     
    </>
  );
};

export default Agregar_Claves;
