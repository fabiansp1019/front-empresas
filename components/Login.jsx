import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useAuth } from '../libs/auth'

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isSignedIn } = useAuth()


  const onSubmit = (e) => {

    e.preventDefault()
    signIn({ email, password })


  };

  return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }}>
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
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
  );
};

export default login;
