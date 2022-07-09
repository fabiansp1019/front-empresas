import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import Hidden from '@mui/material/Hidden';
import { useRouter } from 'next/router'


import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    color: "white",
    fontFamily: "DM Sans",
    fontSize: 26
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 40,
    height: 30,
  },
 
}));

const Navegacion = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(router.asPath)

  const principal = router.asPath

// backgroundImage:'url(/images/teamwork.jpg)'

  return (
    <Box 
    sx={{
      backgroundColor: '#616160',
      '&:hover': {
        backgroundColor: 'black',
        opacity: 1, //[0.5, 0.4, 0.3],
      },
    }}
   >
      <Box  sx={{
      backgroundImage:'url(/images/teamwork.jpg)',
      height: principal=='/'? '100vh' : '50vh',
      opacity:0.6,
      backgroundPosition: '0px 70%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
     }}>
        <Grid
          container
          component="main"
          sx={{ color: "white" }} //C1D6FD
        >
          <Hidden smDown>
          <Grid item   md={5} sx={{ paddingTop: 1, paddingLeft: 10, height: 80 }}>
          <Link href={"/"}>
            <Image src={'/images/logo-blanco.png'} alt="item.title" width="400" height="70" />
            </Link>
          </Grid>
          </Hidden>
          
          <Grid item xs={3} sm={3} md={2} sx={{ paddingTop: 5 }}>
            <Link href={"/nosotros"}>
              <Typography color="textPrimary" className={classes.link}>
                <strong>Nosotros</strong>
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={3} sm={3} md={2} sx={{ paddingTop: 5 }}>
            <Link href={"/servicios"}>
              <Typography color="textPrimary" className={classes.link}>
                <strong>Servicios</strong>
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={3} sm={3} md={2} sx={{ paddingTop: 5 }}>
            <Link href={"/contactanos"}>
              <Typography color="textPrimary" className={classes.link}>
                <strong>Contactanos</strong>
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={2} sm={2} md={1} sx={{paddingTop: 5}}>
            <Link href={"/public/login"}>
            <ExitToAppIcon className={classes.icon} />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Navegacion;
