import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRouter } from 'next/router'

import { useQuery, useMutation } from "@apollo/client";
import {
  GET_EMPRESAS,
  CREAR_CLAVE,
  CREAR_IMPUESTO,
} from "../../graphql/queries";


export const Claves = ({ id }) => {
  const [nombreEntidad, setNombreEntidad] = React.useState("");
  const [usuario, setUsuario] = React.useState("");
  const [contrasenna, setContrasenna] = React.useState("");
  const [comentario, setComentario] = React.useState("");

  const [crearClave, { loading, error }] = useMutation(CREAR_CLAVE);
  const router = useRouter();
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
      router.push('/')
      if (loading) {
        return "loading";
      }
      if (error) {
        return <NoAutorizado />;
      }

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
      <TextField
        id="nombreEntidad"
        label="Nombre Entidad"
        onChange={(e) => setNombreEntidad(e.target.value)}
      />
      <TextField
        id="usuario"
        label="Usuario"
        onChange={(e) => setUsuario(e.target.value)}
      />
      <TextField
        id="contraseña"
        label="Contraseña"
        onChange={(e) => setContrasenna(e.target.value)}
      />
      <TextField
        id="comentario"
        label="Comentario"
        onChange={(e) => setComentario(e.target.value)}
      />
      <button onClick={guardarClave}>Guardar</button>
    </>
  );
};
export const Impuestos = ({ id }) => {
  const [nombreImpuesto, setNombreImpuesto] = React.useState("");
  const [comentario, setComentario] = React.useState("");
  const router = useRouter();
  const [crearImpuesto, { loading, error }] = useMutation(CREAR_IMPUESTO);

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
      router.push('/')
      document.getElementById("impuesto").value = "";
      document.getElementById("comentario").value = "";
    }
  };
  return (
    <>
      <TextField
        id="impuesto"
        label="Nombre Impuesto"
        onChange={(e) => setNombreImpuesto(e.target.value)}
      />
      <TextField
        id="comentario"
        label="Comentario"
        onChange={(e) => setComentario(e.target.value)}
      />

      <button onClick={guardarImpuesto}>Guardar</button>
    </>
  );
};

const Agregar_Claves = () => {
  const [personName, setPersonName] = React.useState("");
  const [cambiar, setCambiar] = React.useState(false);
  const [id, setId] = React.useState("");
  

  const { loading, error, data } = useQuery(GET_EMPRESAS);

  if (loading) {
    return "loading";
  }
  if (error) {
    return <NoAutorizado />;
  }

  // console.log(data)

  const handleChange = (event) => {
    setPersonName(event.target.value);
    setId(event.target.value);
  };
  return (
    <>
      <List
        component="nav"
        aria-label="mailbox folders"
      >
        <ListItem >
          <FormControl>
            <InputLabel id="demo-mutiple-name-label">Empresa</InputLabel>
            <Select
              value={personName}
              onChange={handleChange}
              input={<Input />}
            >
              {data.empresas.map((name) => (
                <MenuItem key={name.id} value={name.id}>
                  {name.razonSocial}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        <Divider />
      </List>

      <button onClick={() =>{ 
        setCambiar(!cambiar)
        const { loading, error, data } = useQuery(GET_EMPRESAS);
      }}>
        h
        {cambiar ? "Claves" : "Impuestos"}
      </button>
      {cambiar ? <Claves id={id} /> : <Impuestos id={id} />}
    </>
  );
};

export default Agregar_Claves;
