import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import libs from "../../../libs/util";
import { useAuth } from "../../../libs/auth";
import LayoutP from "../../../components/Layoutprivate";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { fbStorage } from "../../../services/firebase";

const hvform = () => {
  const [dense, setDense] = React.useState(false);
  const router = useRouter();

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [lugarDeNacimiento, setLugarDeNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [foto, setFoto] = useState("");
  const [linkending, setLinkending] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [formacion, setFormacion] = useState();
  const [experiencia, setExperiencia] = useState();
  const [skills, setSkills] = useState();

  const [nivelFormacion, setNivelFormacion] = useState("");
  const [nombreFormacion, setNombreFormacion] = useState("");

  const [cargoExperiencia, setCargoExperiencia] = useState("");
  const [empresaExperiencia, setEmpresaExperiencia] = useState("");
  const [tiempoExperiencia, setTiempoExperiencia] = useState("");

  const [skil, setSkil] = useState("");
  const { getAuthHeaders } = useAuth();
  const [progrbar, setProgrbar] = useState(0);
  const [file, setFile] = useState();
  

  useEffect(async () => {
    const result = await axios({
      method: "get",
      url: libs.location() + "api/hojavida",
      headers: getAuthHeaders(),
    });
    // console.log(result.data[0]);
    // setDatares(result.data[0]);

    setId(result.data[0]?._id);
    setNombre(result.data[0]?.nombre);
    setFechaDeNacimiento(libs.splitFecha(result.data[0]?.fechaDeNacimiento));
    setTelefono(result.data[0]?.telefono);
    setCorreo(result.data[0]?.correo);
    setLugarDeNacimiento(result.data[0]?.lugarDeNacimiento);
    setGenero(result.data[0]?.genero);
    setEstadoCivil(result.data[0]?.estadoCivil);
    setLinkending(result.data[0]?.linkending);
    setDescripcion(result.data[0]?.descripcion);
    setFoto(result.data[0]?.foto);
    setFormacion(result.data[0]?.formacion ? result.data[0]?.formacion : []);
    setExperiencia(
      result.data[0]?.experiencia ? result.data[0]?.experiencia : []
    );
    setSkills(result.data[0]?.skills ? result.data[0]?.skills : []);
  }, []);

  const onSendImage = async (e) => {
    e.preventDefault();

    if (!file) {
      console.log("Elige un arvhivo de tu computador.");
    } else {
      const storageRef = fbStorage.ref(file.name).put(file);
      storageRef.on(
        "state_changed",
        function (snapshot) {
          var progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgrbar(progress);
          // console.log("Upload is " + progress + "% done");
        },
        function (error) {},
        function () {
          storageRef.snapshot.ref
            .getDownloadURL()
            .then(async function (downloadURL) {
              // console.log("File available at", downloadURL);
              setFoto(downloadURL);
            });
        }
      );
    }
  };
  const onChangeFile = (e) => {
    e.preventDefault();
    // console.log(e.target.files[0]);

    const pesoValido = e.target.files[0].size < 50 * 1024 * 1024;
    const isNameOfOneImageRegEx = /.(jpe?g|png)$/i;
    const extencionValida = isNameOfOneImageRegEx.test(e.target.files[0].name);
    if (extencionValida) {
      if (pesoValido) {
        setFile(e.target.files[0]);
      } else {
        console.log("error");
      }
    } else {
      console.log("error");
    }
  };
  const enviarInformacion = async () => {
    const data = {
      nombre,
      fechaDeNacimiento,
      telefono,
      correo,
      lugarDeNacimiento,
      genero,
      estadoCivil,
      foto,
      linkending,
      descripcion,
      formacion,
      experiencia,
      skills,
    };
    // console.log(data)
    var result;

    if (!id) {
      result = await axios({
        method: "post",
        url: libs.location() + "api/hojadevida",
        headers: getAuthHeaders(),
        data: data,
      });
    } else {
      result = await axios({
        method: "put",
        url: libs.location() + "api/hojadevida",
        headers: getAuthHeaders(),
        data: data,
      });
    }

    router.push("/dashboard");
  };
  const agregarFormacion = () => {
    if (nivelFormacion && nombreFormacion) {
      formacion.push({ nivel: nivelFormacion, nombre: nombreFormacion });
      setNivelFormacion("");
      setNombreFormacion("");

      document.getElementById("formacion-nivel").value = "";
      document.getElementById("formacion-nombre").value = "";
    }
  };

  const agregarExperiencia = () => {
    if (cargoExperiencia && empresaExperiencia && tiempoExperiencia) {
      experiencia.push({
        cargo: cargoExperiencia,
        empresa: empresaExperiencia,
        tiempo: tiempoExperiencia,
      });
      setCargoExperiencia("");
      setEmpresaExperiencia("");
      setTiempoExperiencia("");

      document.getElementById("experiencia-cargo").value = "";
      document.getElementById("experiencia-empresa").value = "";
      document.getElementById("experiencia-tiempo").value = "";
    }
  };

  const agregarSkill = () => {
    if (skil) {
      skills.push({ skill: skil });
      setSkil("");

      document.getElementById("skills").value = "";
    }
  };

  const imprimirJSON = () => {
   

    // console.log(foto);
    // console.log(file)
  };

  return (
    <LayoutP>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Nombre"
            defaultValue="nombre"
            variant="standard"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            type={"date"}
            variant="standard"
            value={fechaDeNacimiento}
            onChange={(e) => setFechaDeNacimiento(e.target.value)}
          />

          <TextField
            required
            id="standard-required"
            label="Telefono"
            defaultValue="telefono"
            variant="standard"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Correo"
            defaultValue="correo"
            variant="standard"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Lugar de nacimiento"
            defaultValue="lugarDeNacimiento"
            variant="standard"
            value={lugarDeNacimiento}
            onChange={(e) => setLugarDeNacimiento(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Genero"
            defaultValue="genero"
            variant="standard"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Estado civil"
            defaultValue="estadoCivil"
            variant="standard"
            value={estadoCivil}
            onChange={(e) => setEstadoCivil(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Linkending"
            defaultValue="linkending"
            variant="standard"
            value={linkending}
            onChange={(e) => setLinkending(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Descripcion"
            defaultValue="descripcion"
            variant="standard"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <div>
          {progrbar !== 0 && (
                <>
                  <div>progreso.... {progrbar}</div>
                </>
              )}
              {!foto ? (
                <>
                  <form >
                    <input
                      className="form-control"
                      type="file"
                      onChange={onChangeFile}
                      accept=".jpg, .jpeg, .png"
                    />
                    <Button color="secondary" onClick={onSendImage}>
                      Cargar
                    </Button>
                  </form>
                </>
              ) : null}
            <TextField
              required
              id="standard-required"
              label="Foto"
              defaultValue="foto"
              variant="standard"
              value={foto}
              // onChange={(e) => setFoto(e.target.value)}
            />
          </div>

          <Grid container>
            <Grid item xs={12} md={4}>
              <Box>
                <TextField
                  required
                  id="formacion-nivel"
                  label="Nivel de formacion"
                  variant="standard"
                  onChange={(e) => setNivelFormacion(e.target.value)}
                />
                <br />
                <TextField
                  required
                  id="formacion-nombre"
                  label="Nombre"
                  variant="standard"
                  onChange={(e) => setNombreFormacion(e.target.value)}
                />
                <br />
                <Button onClick={agregarFormacion}>agregar</Button>

                <List dense={dense}>
                  {formacion
                    ? formacion.map((form) => {
                        return (
                          <ListItem>
                            <ListItemText
                              primary={form.nivel}
                              secondary={form.nombre}
                            />
                          </ListItem>
                        );
                      })
                    : null}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <TextField
                  required
                  id="experiencia-cargo"
                  label="Cargo"
                  variant="standard"
                  onChange={(e) => setCargoExperiencia(e.target.value)}
                />
                <br />
                <TextField
                  required
                  id="experiencia-empresa"
                  label="Empresa"
                  variant="standard"
                  onChange={(e) => setEmpresaExperiencia(e.target.value)}
                />
                <br />
                <TextField
                  required
                  id="experiencia-tiempo"
                  label="Tiempo"
                  variant="standard"
                  onChange={(e) => setTiempoExperiencia(e.target.value)}
                />
                <br />
                <Button onClick={agregarExperiencia}>agregar</Button>

                <List dense={dense}>
                  {experiencia
                    ? experiencia.map((exp) => {
                        return (
                          <ListItem>
                            <ListItemText
                              primary={exp.cargo + " - " + exp.tiempo}
                              secondary={exp.empresa}
                            />
                          </ListItem>
                        );
                      })
                    : null}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <TextField
                  required
                  id="skills"
                  label="Skills"
                  variant="standard"
                  onChange={(e) => setSkil(e.target.value)}
                />
                <br />
                <Button onClick={agregarSkill}>agregar</Button>

                <List dense={dense}>
                  {skills
                    ? skills.map((skil) => {
                        return (
                          <ListItem>
                            <ListItemText
                              // primary={skil.nivel}
                              secondary={skil.skill}
                            />
                          </ListItem>
                        );
                      })
                    : null}
                </List>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button onClick={enviarInformacion}>guardar</Button>

        <Button onClick={imprimirJSON}>testearJSON</Button>
      </Box>
    </LayoutP>
  );
};

export default hvform;
