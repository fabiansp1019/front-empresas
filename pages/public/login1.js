import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Layout from "../../components/Layout";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LOGIN } from "../../graphql/queries";

const login = async () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useMutation(LOGIN, {
    onCompleted: (data) => {

      if(data.login){
        const token = data.login.split(" ")[0];
        const mail = data.login.split(" ")[1];
        console.log(mail);
        window.localStorage.setItem("authorization", token); // JSON.stringify(data.login)
      }
      // console.log(data)  .split(" ")[1]
      if(data.login === 'Invalid'){
        console.log('error detectado');
        throw new Error(
          `Failed authenticating with HTTP status ${data.login}`
        )
      }

      // window.localStorage.setItem("user", JSON.stringify(ress.data.info));
    },
  });

  const onSubmit = ()=>{

    try{
      login( {variables:{ email: email, password: password }});
    }catch(err){
      console.log(err)
    }

  }

  return (
    <Layout>

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
                  onChange={(e)=>{
                    e.preventDefault()
                    setEmail(e.target.value)}
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                  onChange={(e)=>{
                    e.preventDefault()
                    setPassword(e.target.value)}
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="outlined" onClick={onSubmit}>Ingresar</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </Layout>
  );
};

export default login;
