import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import Layout from "../../components/LayoutPublic";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import axios from "axios";
import libs from "../../libs/util";

// import data from "../../data.json";


import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const nosotros = () => {

  const [hojasDeVidas, setHojasDeVidas] = useState([])
  const Router = useRouter();
  // console.log(Router.asPath);

  useEffect(async()=>{
    const result = await axios({
      method: "get",
      url: libs.location() + "api/hojadevida",
    });
    setHojasDeVidas(result.data)
    console.log(result.data)
  },[])

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ color: "black" }}>
              <Typography>
                <h1>Nosotros</h1>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="400"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=cl%2057%2028%2020&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <a href="https://fmovies-online.net"></a>
                  <br />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              CIT CONSULTORES es una empresa ubicada en la ciudad de Medellín
              con sede en Bogota, cuyo propósito es garantizar la tranquilidad y
              bienestar a las personas naturales y jurídicas, a través de
              servicios especializados en materia tributaria, contable y
              juridica.
            </Typography>
            <br />
            <br />
            <br />
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ color: "black" }}>
              <Typography>
                <h1>Nuestros Colaboradores</h1>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container>
              {hojasDeVidas?.map((persona) => {
                return (
                  <>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: 'gray' }}
                              aria-label="recipe"
                            >
                              {persona?.nombre[0]}
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title={persona?.nombre}
                          subheader="January 14, 2022"
                        />
                        <CardMedia
                          component="img"
                          height="194"
                          image={persona.foto}
                          alt="Paella dish"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {persona.descripcion}
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites" onClick={()=>window.open(Router.asPath + `/${persona._id}/hv`, '_blank')}>
                            <ZoomInIcon />
                          </IconButton>
                          <IconButton aria-label="share" onClick={()=>window.open(`${persona?.linkending}`, '_blank')}>
                            <LinkedInIcon />
                          </IconButton>
                        </CardActions>

                      </Card>
                       <br />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};



export default nosotros;
