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

const nosotros = () => {
  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image src={'/images/ubicacion.jpg'} width='400px' height='400px' />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              CIT CONSULTORES es una empresa ubicada en la ciudad de Medellín
              con sede en Bogota, cuyo propósito es garantizar la tranquilidad y
              bienestar a las personas naturales y jurídicas, a través de
              servicios especializados en materia tributaria, contable y
              juridica.
            </Typography>
            <br/>
            <br/>
            <br/>
          </Grid>
          
          <Grid item xs={12} md={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  heloo
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default nosotros;
