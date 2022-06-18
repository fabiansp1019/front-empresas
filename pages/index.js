import React from "react";
import Layout from "../components/LayoutPublic";
import { useAuth } from "../libs/auth";
import LayoutPrivate from "../components/Layoutprivate";
import Grid from '@mui/material/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Index = () => {
  const { signOut, isSignedIn, user } = useAuth();

  return (
    <>
      {!isSignedIn() && (
        <Layout>
        
          <CssBaseline />
      <Container maxWidth="md">
        <Typography>
          Bienvenidos.
          <br/>
          Soluciones a tu alcance
        </Typography>
        {/* <Typography component="div" style={{ backgroundColor: '#ffffff', height: '100vh' }} /> */}

        <Grid container component="main" sx={{ height: '93vh' }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            backgroundImage: 'url(https://st4.depositphotos.com/10325396/28774/i/450/depositphotos_287748220-stock-photo-technical-financial-graph-on-technology.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '',//cover
            backgroundPosition: 'center',
          }}
        />
        </Grid>
      </Container>
















        </Layout>
      )}

      {isSignedIn() && (
          <LayoutPrivate>
            Bienvenido
          </LayoutPrivate>
      )}
    </>
  );
};

export default Index;
