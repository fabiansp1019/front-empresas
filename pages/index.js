import React from "react";
import Layout from "../components/LayoutPublic";
import { useAuth } from "../libs/auth";
import LayoutPrivate from "../components/Layoutprivate";
import Grid from "@mui/material/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Index = () => {
  const { signOut, isSignedIn, user } = useAuth();

  return (
    <>
      {!isSignedIn() && (
        <Layout>

          <CssBaseline />

        </Layout>
      )}

      {isSignedIn() && <LayoutPrivate>Bienvenido</LayoutPrivate>}
    </>
  );
};

export default Index;
