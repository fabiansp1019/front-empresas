
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function NoAutorizado() {
  setTimeout(() => {
    window.location.href = '/';
  }, 500);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
            NO AUTORIZADO
        </Typography>
      </Container>
    </React.Fragment>
  );
}