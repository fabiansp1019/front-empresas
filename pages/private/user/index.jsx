import React, { useState } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import { Card, CardContent, FormControl, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USUARIO } from "../../../graphql/queries";
import { useRouter } from "next/router";
import LayoutP from "../../../components/Layoutprivate";
import Alert from '@mui/material/Alert';
import { useAuth } from "../../../libs/auth";
import libs from "../../../libs/util";

import { fbStorage } from "../../../services/firebase";

export const useStylesAvatar = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const id = () => {
  const classesAvatar = useStylesAvatar();
  const router = useRouter();
  const { getAuthHeaders } = useAuth();
  const [informacion, setInformacion] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState();
  const [progrbar, setProgrbar] = useState(0);
  const [alert, setAlert] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const { data, loading, error } = useQuery(GET_USUARIO, {
    variables: {
      id: router.query.id,
    },
  });


  React.useEffect(async() => {
    const result = await axios({
      method: 'get',
      url: libs.location() + 'api/user',
      headers: getAuthHeaders()
    });
    setInformacion(result.data);
  }, []);




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
        setAlert(true);
      }
    } else {
      setAlert(true);

    }
  };

  const EnvioApiImg = async () => {
    await axios({
      method: "put",
      url: libs.location() + "api/actualizarusuario/" + router.query.id,
      headers: getAuthHeaders(),
      data: {
        foto: url,
      },
    });

    setUrl("");
  };

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
          //console.log("Upload is " + progress + "% done");
        },
        function (error) {},
        function () {
          storageRef.snapshot.ref
            .getDownloadURL()
            .then(async function (downloadURL) {
              console.log("File available at", downloadURL);
              setUrl(downloadURL);
            });
        }
      );
    }
  };

  // console.log(router.query.id);

  return (
    <LayoutP>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6">Usuario</Typography>
        <List
          sx={{
            width: "63vw",
            maxWidth: 900,
            bgcolor: "#FFFFFF",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <ListItemAvatar>
                <Avatar
                  className={classesAvatar.large}
                  src={informacion.foto}
                ></Avatar>
              </ListItemAvatar>
            </Grid>
            <Grid item xs={12} sm={7}>
              <ListItem>
                <ListItemText
                  primary={informacion.displayName}
                  secondary="Nombre"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={informacion.email}
                  secondary="Correo Electronico"
                />
              </ListItem>
            </Grid>
          </Grid>
        </List>

        <Card>
          <CardContent>
            <Typography>
              {progrbar !== 0 && (
                <>
                  <div>progreso.... {progrbar}</div>
                </>
              )}
              {!url ? (
                <>
                  <form onSubmit={onSendImage}>
                    <input
                      className="form-control"
                      type="file"
                      onChange={onChangeFile}
                      accept=".jpg, .jpeg, .png"
                    />
                    <Button color="secondary" type="submit">
                      Cargar
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  {/* {setProgrbar(0)} */}
                  <Button color="secondary" onClick={EnvioApiImg}>
                    Guardar Archivo
                  </Button>
                </>
              )}
              {alert && (<Alert id="notificaciones" severity="error">Error, solo se recibo formatos imagen</Alert>)}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </LayoutP>
  );
};

export default id;
