import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { useRouter } from "next/router";
import LayoutP from "../../../components/Layoutprivate";
import Agregar_Claves from "../../../components/Empresas/Agregar_Claves";
import { useQuery, useMutation } from "@apollo/client";
import { GET_EMPRESA } from "../../../graphql/queries";
import NoAutorizado from "../../../components/NoAutorizado";

export const InformacionGeneral = ({ data }) => {
  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6">Informacion General</Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItemAvatar>
            <Avatar sx={{ width: "15vw", height: "25vh" }}>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItem>
            <ListItemText primary={data.empresa.nit} secondary="NIT" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={data.empresa.razonSocial}
              secondary="RAZON SOCIAL"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={data.empresa.ciudad} secondary="CIUDAD" />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export const Claves = ({ data }) => {
  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6">Usuarios y Claves</Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {data.empresa.claves.map((clave) => (
            <>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItem>
                <ListItemText primary={clave.entidad} secondary="ENTIDAD" />
              </ListItem>

              <ListItem>
                <ListItemText primary={clave.usuario} secondary="USUARIO" />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={clave.contrasenna}
                  secondary="CONSTRASEÑA"
                />
              </ListItem>

              <ListItem>
                <ListItemText primary={clave.comentario} />
              </ListItem>
              {/* <div>-------</div> */}
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </div>
  );
};

export const Impuestos = ({ data }) => {
  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6">Responsabilidades</Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          {data.empresa.responsabilidad.map((resp) => {
            return (
              <>
                <ListItem>
                  <ListItemText primary={resp.impuesto} />
                </ListItem>
                {/* <ListItem>
                  <ListItemText
                    primary={resp.impuesto}
                  />
                </ListItem> */}
              </>
            );
          })}
        </List>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translateZ(0px)",
    flexGrow: 1,
    backgroundColor: "#fff",
    border: "none",
    position: "fixed",
    top: "10%",
    right: "10%",

    width: "4rem",
    height: "2rem",
  },
}));

const actions = [
  { icon: <ContactPhoneIcon />, name: "Informacion", value: "informacion" },
  {
    icon: <BookmarkIcon />,
    name: "Responsabilidades",
    value: "responsabilidad",
  },
  { icon: <VpnKeyIcon />, name: "Claves", value: "claves" },
  { icon: <AddCircleIcon />, name: "Agregar Informacion", value: "agregar" },
];

export const ButtonFlotante = ({ testingPropHijo }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.root}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            className={classes.speedDial}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            value={action.value}
            onClick={(e) => {
              // setSelectEstatus( action.value);
              testingPropHijo(action.value);
              handleClose();
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

const info = () => {
  const { query } = useRouter();
  const [selector, setSelector] = useState("informacion");
  // console.log(query.info);

  const { data, loading, error } = useQuery(GET_EMPRESA, {
    variables: {
      id: query.info,
    },
  });

  if (loading) {
    return "loading";
  }
  if (error) {
    return <NoAutorizado />;
  }
  // console.log(data);
  // sx={{position:'fixed', top:'20%', right: '20%'}}

  const testingPropHijo = (selectEstatus) => {
    setSelector(selectEstatus);
    // console.log(selectEstatus);
  };
  return (
    <LayoutP>
      <Box color="text.primary">
        <Stack spacing={1}>
          <h1>{data.empresa.razonSocial}</h1>
          <Skeleton variant="text" />
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "60vw",
              minHeight: "50vh",
            },
          }}
        >
          <Paper elevation={0}>
            <ButtonFlotante testingPropHijo={testingPropHijo} />

            {selector === "informacion" ? (
              <InformacionGeneral data={data} />
            ) : null}
            {selector === "responsabilidad" ? <Impuestos data={data} /> : null}
            {selector === "claves" ? <Claves data={data} /> : null}
            {selector === "agregar" ? <Agregar_Claves data={data} /> : null}
            {/* <Impuestos data={data} /> */}
          </Paper>
        </Box>
      </Box>
    </LayoutP>
  );
};

export default info;
