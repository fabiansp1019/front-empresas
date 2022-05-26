import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import { Card, CardContent, FormControl, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USUARIO } from "../../../graphql/queries";
import { useRouter } from "next/router";
import LayoutP from "../../../components/Layoutprivate";
import { useAuth } from "../../../libs/auth";

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
  const [open, setOpen] = React.useState(false);

  const [informacion, setInformacion] = useState("");

  const {user} = useAuth();

  const [nit, setNit] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [ciudad, setCiudad] = useState("");

  const [url, setUrl] = useState("");
  const [file, setFile] = useState();
  const [progrbar, setProgrbar] = useState(0);

  const { data, loading, error } = useQuery(GET_USUARIO, {
    variables: {
      id: router.query.id,
    },
  });
  // useEffect(() => {}, []);
setTimeout(() => {
  if(data){
    setInformacion(data.user)
    // console.log(data)
  }
})
  // console.log(user)


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onChangeFile = (e) => {
    e.preventDefault();
    // console.log(e.target.files[0]);

    const pesoValido = e.target.files[0].size < 50 * 1024 * 1024;
    const isNameOfOneImageRegEx = /.(jpe?g|gif|png|pdf)$/i;
    // const pesoValido = e.target.files[0].size < 24

    const extencionValida = isNameOfOneImageRegEx.test(e.target.files[0].name);
    if (extencionValida) {
      if (pesoValido) {
        setFile(e.target.files[0]);
      } else {
        return toast.error("Imagen muy pesada, debe ser inferior a 30 MB");
      }
    } else {
      return toast.error("El formato debe ser JPG JPEG PNG GIF PDF ");
    }
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
              //console.log('File available at', downloadURL);
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
                <Avatar className={classesAvatar.large}
                src={informacion.foto}
                >
                </Avatar>
              </ListItemAvatar>
            </Grid>
            <Grid item xs={12} sm={7}>
              <ListItem>
                <ListItemText primary={informacion.displayName} secondary="Nombre" />
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

        <Button onClick={handleOpen}>
          <CreateIcon />
        </Button>

        ------------------
        <Card>
              <CardContent>
                <Typography>
                  <form onSubmit={onSendImage}>

                    <input
                      className="form-control"
                      type="file"
                      onChange={onChangeFile}
                      accept=".jpg, .jpeg, .png, .gif, .pdf"
                    />
                    <Button color="secondary" type="submit">
                      Cargar
                    </Button>
                    {/* {loading === true ? (
                      <div className="progress rounded-0">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: `${progrbar}%` }}
                        >
                          {progrbar}%
                        </div>   onClick={sendUrl}
                      </div>
                    ) : null} */}
                  </form>
                  {url ? (
                    <Button color="secondary" >
                      Guardar Archivo {url}
                    </Button>
                  ) : null}


                </Typography>
              </CardContent>
            </Card>
      </Box>
    </LayoutP>
  );
};

export default id;
