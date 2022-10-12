import React from "react";
import LayoutPrivate from "../../../components/Layoutprivate";
import axios from "axios";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import cookie from "js-cookie";
import libs from '../../../libs/util'
import { useAuth } from "../../../libs/auth";

const index = () => {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);

  const { getAuthHeaders } = useAuth();
 
  // console.log(getAuthHeaders());
  // console.log(info);
  const getdata = async () => {
    const token = cookie.get("__session");
    const req = await axios({
      method: "post",
      url: libs.location() + "api/buscarEmpresas",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        search,
      },
    });
    setData(req.data);
    // console.log(req.data);
  };

  const OnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <LayoutPrivate>
      <>
      {data && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            
            <Grid item xs={7} sm={8}>
              <nav aria-label="main mailbox folders">
                <List>
                  {data?.map((item, key) => (
                    <Link
                      href={
                        "/private/estadosfinancieros/estadodesituacionfinanciera/" +
                        item?._id
                      }
                    >
                      <ListItem disablePadding key={key + 1}>
                        <ListItemButton>
                          <ListItemText primary={item?.razonSocial} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </nav>
            </Grid>
            <Grid item xs={5} sm={3} sx={{ position: "fixed", right: "6rem" }}>
              <Stack spacing={1} direction="row">
                <Box sx={{ display: "block",  width: '7rem', height: '2rem' }}>
                  <TextField
                    id="input-with-sx"
                    label="Cliente"
                    variant="standard"
                    onChange={OnChange}
                  />
                </Box>
                <Button
                  color="secondary"
                  size="small"
                  variant="contained"
                  onClick={getdata}
                >
                  Buscar
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        )}
      </>
    </LayoutPrivate>
  );
};

// export async function getStaticProps(ctx) {

//   return {
//     props: {
//       info: req.data  || null,
//     },
//   }
// }

export default index;
