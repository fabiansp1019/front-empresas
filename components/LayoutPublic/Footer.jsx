import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "150vh",
        backgroundColor: "#616160",
        "&:hover": {
          backgroundColor: "#040404",
          opacity: 1, //[0.5, 0.4, 0.3],
        },
        color: "white",
      }}
    >
      <Grid container component="main" sx={{}}>
        <Grid item xs={12} md={4} sx={{ paddingLeft: "5%" }}>
          <Box sx={{ textAlign: "left" }}>
            <Image
              src={"/images/logo-blanco.png"}
              alt="item.title"
              width="300"
              height="70"
            />

            <Typography>
              <br />
              "Contribuimos a la creación de comunidad empresarial y prosperidad
              patrimonial"
              <h4>
                CL 57 28 20 Medellín, Colombia CL 52 SUR 43 A 20 IN 1908 Bogota,
                Colombia
              </h4>
              mbanalistas@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ paddingLeft: "5%" }}>
          <Box sx={{}}>
            <h1>SERVICIOS</h1>
            <Typography>
              <h4>
                - Asesoria Contable
                <br />
                - Asesoria Tributaria
                <br />
                - Asesoria Personas Naturales
                <br />
                - Asesoria Juridica en Derecho Laboral
                <br />- Asesoria Juridica en Responsabilidad Civil
              </h4>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ paddingLeft: "5%" }}>
          <Box>
            <Typography>
              <h1>Nuestras redes</h1>
              <Stack direction="row" spacing={4}>
                <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }}>
                  <FacebookIcon />
                </Avatar>
                <Avatar alt="Travis Howard" sx={{ width: 56, height: 56 }}>
                  <TwitterIcon />
                </Avatar>
                <Avatar alt="Cindy Baker" sx={{ width: 56, height: 56 }}>
                  <WhatsAppIcon />
                </Avatar>
              </Stack>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} sx={{ height: 20 }}>
          <Box sx={{ textAlign: "center" }}>
            <>Copyright@</>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            backgroundImage: "url(/images/footer.png)",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
