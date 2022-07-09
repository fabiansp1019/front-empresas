import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import Layout from "../components/LayoutPublic";
import Avatar from "@mui/material/Avatar";
import data from "../data.json";

const nosotros = () => {
  console.log(data);

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Grid container>
        <Grid item xs={12}>
            <Box sx={{ color: "black" }}>
              <Typography>
                <h1>Nuestra Ubicacion</h1>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
            <div class="mapouter"><div class="gmap_canvas">
              <iframe width="400" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=cl%2057%2028%2020&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
              <a href="https://fmovies-online.net">
              </a>
              <br/>
              </div>
              </div>
            </div>
            {/* <Image src={"/images/ubicacion.jpg"} width="400px" height="400px" /> */}
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
            {data?.map((persona) => {
              return (
                <>
                  <Card sx={{ minWidth: 275 }} key={persona.id}>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {persona.nombre}
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Profesional en:
                          </Typography>
                          <Typography variant="h5" component="div">
                            {persona.profesion}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Avatar
                          alt="Remy Sharp"
                          src={persona.foto}
                          sx={{ width: 200, height: 200 }}
                        />
                      </Grid>
                    </Grid>
                  </Card>
                  <br />
                </>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default nosotros;
