import React from "react";
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
import Button from "@material-ui/core/Button";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { useRouter } from "next/router";
import LayoutP from "../../../components/Layoutprivate";
import { useQuery, useMutation } from "@apollo/client";
import { GET_EMPRESA } from "../../../graphql/queries";
import NoAutorizado from "../../../components/NoAutorizado";
import { border, width } from "@mui/system";

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
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.empresa.nit} secondary="NIT" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={data.empresa.razonSocial}
              secondary="RAZON SOCIAL"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.empresa.ciudad} secondary="CIUDAD" />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export const Impuestos = ({ data }) => {
  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6">Impuestos</Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {data.empresa.claves.map((clave) => (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
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

export const Claves = ({ data }) => {
  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6">Claves</Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.empresa.nit} secondary="NIT" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={data.empresa.razonSocial}
              secondary="RAZON SOCIAL"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.empresa.ciudad} secondary="CIUDAD" />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translateZ(0px)",
    flexGrow: 1,
    backgroundColor: '#fff',
    border: 'none',
    position:"fixed",
    top: '10%',
    right: '10%',

    width: '4rem',
    height: '4rem',
  },
}));

const actions = [
  { icon: <ContactPhoneIcon />, name: "Informacion" },
  { icon: <BookmarkIcon />, name: "Responsabilidades" },
  { icon: <VpnKeyIcon />, name: "Claves" },
];

export const ButtonFlotante = () => {
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
        onClick={handleClose}
      />
    ))}
  </SpeedDial>
</div>
)}

const info = () => {
  const { query } = useRouter();
  console.log(query.info);



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
  console.log(data);
// sx={{position:'fixed', top:'20%', right: '20%'}}
  return (
    <LayoutP>
      
      <Box color="text.primary" >
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
          <ButtonFlotante />

            <Impuestos data={data} />

            
          </Paper>
        </Box>
      </Box>
    </LayoutP>
  );
};

export default info;
