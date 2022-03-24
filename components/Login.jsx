import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { useAuth } from '../libs/auth'

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { signIn } = useAuth()


  const onSubmit = () => {

    signIn({ email, password })
    .then((res) => {
      if (res){
      setAlert(res.alerta);
      setAlertMessage(res.message);

      setTimeout(() => {
          setAlert(false)
      }, 3000);
      // console.log(res)
    }
    })

  };

  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: "", height: "80vh" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Email@mail.com"
                  variant="standard"
                  type="email"
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                  onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="outlined" onClick={onSubmit}>
                  Ingresar
                </Button>
                <div id="message"></div>
              </Grid>
            </Grid>
            {
              alert && (
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert variant="outlined" severity="error">{alertMessage}</Alert>
                </Stack>
              )
            }
          </Box>
        </Container>
      </React.Fragment>
  );
};

export default login;
