import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InfoIcon from "@mui/icons-material/Info";
import { useAuth } from "../libs/auth";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    height: "5vh",
    color: "white",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 40,
    height: 30,
  },
}));

const Navegacion = () => {
  const { isSignedIn, user } = useAuth();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar sx={{ height: 20 }} position="static">
        <Grid container component="main">
          <Grid item xs={0} sm={3} md={3}></Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ alignContent: "center" }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href={"/"}>
                <Typography color="textPrimary" className={classes.link}>
                  <HomeIcon className={classes.icon} />
                  Home
                </Typography>
              </Link>

              <Link href={"/public/login"}>
                <Typography color="textPrimary" className={classes.link}>
                  <ExitToAppIcon className={classes.icon} />
                  Login
                </Typography>
              </Link>

              <Link href={"/public/about"}>
                <Typography color="textPrimary" className={classes.link}>
                  <InfoIcon className={classes.icon} />
                  About
                </Typography>
              </Link>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={0} sm={3} md={3}></Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navegacion;
