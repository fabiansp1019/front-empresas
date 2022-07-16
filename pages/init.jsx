import React from "react";
import Layout from "../components/LayoutPublic";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import Hidden from "@mui/material/Hidden";
import { useRouter } from "next/router";


const Index = () => {
  return (
    <>
      <Layout>
        <CssBaseline />
      </Layout>
    </>
  );
};

export default Index;