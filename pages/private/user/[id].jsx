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
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FormControl, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USUARIO } from "../../../graphql/queries";
import { useRouter } from "next/router";
import LayoutP from "../../../components/Layoutprivate";
import { useAuth } from "../../../libs/auth";


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
  console.log(user)


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
      </Box>
    </LayoutP>
  );
};

export default id;
