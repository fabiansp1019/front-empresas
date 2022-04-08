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
import Divider from '@mui/material/Divider';
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import { useRouter } from "next/router";
import LayoutP from "../../../components/Layoutprivate";
import { useQuery, useMutation } from "@apollo/client";
import { GET_EMPRESA } from "../../../graphql/queries";
import NoAutorizado from "../../../components/NoAutorizado";

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
              width: "21vw",
              minHeight: "50vh",
            },
          }}
        >
          <Paper elevation={0}>
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
                  <ListItemText primary={data.empresa.razonSocial} secondary="RAZON SOCIAL" />
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
          </Paper>
          <Paper elevation={3}>
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
                  <ListItemText primary={clave.contrasenna} secondary="CONSTRASEÑA" />
                </ListItem>

                <ListItem>
                  <ListItemText primary={clave.comentario}  />
                </ListItem>
                {/* <div>-------</div> */}
                <Divider/>
                </>
                
                ))}
              </List>

            </Box>
          </Paper>
          <Paper elevation={3}>
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
                  <ListItemText primary={data.empresa.razonSocial} secondary="RAZON SOCIAL" />
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
          </Paper>
        </Box>
      </Box>
    </LayoutP>
  );
};

export default info;
