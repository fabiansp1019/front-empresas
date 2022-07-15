import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/router";
import { Grid } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import Paper from "@mui/material/Paper";

// import data from "../data.json";

const hojaVida = ({ data, style }) => {
  const Route = useRouter();
  const info = data;

  console.log(info);
  // console.log(data[Route.query.id - 1])
  return (
    <Grid container>
      <Grid item xs={12} md={style.row1}></Grid>
      <Grid item xs={12} md={style.row2}>
        <Card sx={{ maxWidth: style.car, minHeight: 500 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
                {info?.nombre[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={info?.nombre}
            subheader={info?.fechaNacimiento}
          />

          <Grid container justifyContent="center" spacing={0}>
            <Grid item sx={12} md={6}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  src={info?.foto}
                  sx={{ width: 300, height: 300 }}
                />
              </Stack>
            </Grid>
            <Grid item sx={12} md={6}>
              <CardContent>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  <br />
                  <br />
                  <br />
                  <strong>{info?.nombre.toUpperCase()}</strong>
                  <br />
                  <br />
                  <div>
                    <MailIcon /> {info?.correo}
                  </div>
                  <div>
                    <PhoneIcon /> {info?.telefono}
                  </div>
                </Typography>
              </CardContent>
              <br />
            </Grid>
            <Grid item sx={12} md={12}>
              <br />
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                {info?.descripcion}
              </Typography>
              <br />
              <br />
            </Grid>
            <Grid item sx={12} md={6}>
              <Paper variant="outlined" sx={{ paddingLeft: 5, minHeight: 400 }}>
                <Typography>
                  <strong>Formacion</strong>
                </Typography>
                <br />
                <br />
                {info?.formacion
                  ? info?.formacion?.map((form, key) => {
                      return (
                        <div key={key + 3}>
                          <Typography variant="body2" color="text.secondary">
                            {form.nivel}
                          </Typography>
                          <Typography variant="body2">{form.nombre}</Typography>
                          <br />
                        </div>
                      );
                    })
                  : null}

                <br />
                <br />
                <br />
                <Typography>
                  <strong>Experiencia</strong>
                </Typography>
                <br />
                <br />
                {info?.experiencia
                  ? info?.experiencia?.map((exp, key) => {
                      return (
                        <div key={key + 1}>
                          <Typography variant="body2" color="text.secondary">
                            {exp.cargo} - {exp.tiempo}
                          </Typography>
                          <Typography variant="body2">{exp.empresa}</Typography>
                          <br />
                        </div>
                      );
                    })
                  : null}

                <br />
                <br />
                <Typography>
                  <strong>Skills</strong>
                </Typography>
                <br />
                {info?.skills
                  ? info?.skills?.map((ski, key) => {
                      return (
                        <div key={key + 2}>
                          <Typography variant="body2" color="text.secondary">
                            {ski.skill}
                          </Typography>
                        </div>
                      );
                    })
                  : null}
              </Paper>
            </Grid>
            <Grid item sx={12} md={6}>
              <Paper variant="outlined" sx={{ paddingLeft: 5, minHeight: 400 }}>
                <Typography>
                  <strong>Datos personales</strong>
                </Typography>
                <br />
                <br />
                <Typography variant="body2" color="text.secondary">
                  Fecha de nacimiento
                </Typography>
                <Typography variant="body2">{info?.fechaNacimiento}</Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Lugar de nacimiento
                </Typography>
                <Typography variant="body2">
                  {info?.lugarDeNacimiento}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Genero
                </Typography>
                <Typography variant="body2">{info?.genero}</Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  Estado civil
                </Typography>
                <Typography variant="body2">{info?.estadoCivil}</Typography>
                <br />
                <Typography variant="body2" color="text.secondary"></Typography>

                <br />
              </Paper>
            </Grid>
          </Grid>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={style.row1}></Grid>
    </Grid>
  );
};

export default hojaVida;
