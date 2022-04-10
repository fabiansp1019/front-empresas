import React, { Children, useState } from "react";
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
import CreateIcon from "@mui/icons-material/Create";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { FormControl, Input } from "@material-ui/core";

import { useRouter } from "next/router";
import LayoutP from "../../../components/Layoutprivate";
import Agregar_Claves from "../../../components/Empresas/Agregar_Claves";
import { useQuery, useMutation } from "@apollo/client";
import { GET_EMPRESA, MODIFICAR_CONTRASENIAS } from "../../../graphql/queries";
import NoAutorizado from "../../../components/NoAutorizado";

export const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const useStylesAvatar = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));

export const InformacionGeneral = ({ data }) => {
  const classes = useStylesModal();
  const classesAvatar = useStylesAvatar();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const [nit, setNit] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [ciudad, setCiudad] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* modal para poder modificar la informacion */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Box sx={{ m: 2 }}>
                <Paper>
                  <FormControl>
                    <Input
                      id="nit"
                      aria-describedby="my-helper-text"
                      value={data.empresa.nit}
                      onChange={(e) => setNit(e.target.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      id="razonSocial"
                      aria-describedby="my-helper-text"
                      value={data.empresa.razonSocial}
                      onChange={(e) => setRazonSocial(e.target.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      id="ciudad"
                      aria-describedby="my-helper-text"
                      value={data.empresa.ciudad}
                      onChange={(e) => setCiudad(e.target.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <Button color="primary">Guardar</Button>
                  </FormControl>
                </Paper>
              </Box>
            </div>
          </Fade>
        </Modal>
      </div>
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
          {/* sx={{ width: "15vw", height: "25vh" }} */}
            <Avatar className={classesAvatar.large} >  
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

        <Button onClick={handleOpen}>
          <CreateIcon />
        </Button>
      </Box>
    </div>
  );
};

export const Claves = ({ data }) => {
  const classes = useStylesModal();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const [idClave, setIdClave] = useState("");
  const [entidad, setEntidad] = React.useState("");
  const [usuario, setUsuario] = React.useState("");
  const [contrasenna, setContrasenna] = React.useState("");
  const [comentario, setComentario] = React.useState("");
  const [
    modificarClavesEmpresas,
    { dataModificarClaves, loadingModificarClaves, errorModificarClaves },
  ] = useMutation(MODIFICAR_CONTRASENIAS);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const modificarClaves = () => {
    modificarClavesEmpresas({
      variables: {
        id: idClave,
        usuario: usuario,
        contrasenna: contrasenna,
        comentario: comentario,
      },
    });
    router.push(`/private/emp/${router.query.info}`);

    if (loadingModificarClaves) {
      return "loading";
    }
    if (errorModificarClaves) {
      return <NoAutorizado />;
    }
    // console.log(dataComImp);
  };

  return (
    <div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Box sx={{ m: 2 }}>
                <Paper>
                  <FormControl>
                    <h1
                      id="entidad"
                      aria-describedby="my-helper-text"
                      value={entidad}
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      id="usuario"
                      aria-describedby="my-helper-text"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      id="contrasenna"
                      aria-describedby="my-helper-text"
                      value={contrasenna}
                      onChange={(e) => setContrasenna(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <TextareaAutosize
                      id="comentario"
                      aria-label="minimum height"
                      minRows={3}
                      value={comentario}
                      onChange={(e) => setComentario(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <Button color="primary" onClick={modificarClaves}>
                      Guardar
                    </Button>
                  </FormControl>
                </Paper>
              </Box>
            </div>
          </Fade>
        </Modal>
      </div>

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
                <Button
                  onClick={() => {
                    handleOpen();
                    setEntidad(clave.entidad);
                    setUsuario(clave.usuario);
                    setContrasenna(clave.contrasenna);
                    setComentario(clave.comentario);
                    setIdClave(clave.id);
                  }}
                >
                  <CreateIcon
                    sx={{
                      fontSize: "8px",
                    }}
                  />
                </Button>
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
              width: "70vw",
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
