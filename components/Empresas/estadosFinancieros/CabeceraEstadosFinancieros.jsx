import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import libs from "../../../libs/util";
import { useAuth } from "../../../libs/auth";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

export const useStylesAvatar = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(30),
    height: theme.spacing(10),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const CabeceraEstadosFinancieros = ({ name }) => {
  const [data, setData] = React.useState([]);
  const router = useRouter();
  const { getAuthHeaders } = useAuth();
  const { id } = router.query;
  const classesAvatar = useStylesAvatar();

  const getdata = async () => {
    const res = await axios({
      method: "post",
      url: libs.location() + "api/buscarempresa",
      headers: getAuthHeaders(),
      data: {
        id,
      },
    });
    setData(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Avatar
            className={classesAvatar.small}
            variant="rounded"
            src={data?.logo}
          ></Avatar>
        </Grid>
        <Grid item xs={6}>
          <Typography align="center" variant="h6">
            <div>
              <Typography variant="eeff">{data?.razonSocial}</Typography>
            </div>
            <div>
              <Typography variant="eeff">{data?.nit}</Typography>
            </div>
            <div>
              <Typography variant="eeff">{name}</Typography>
            </div>
            <div>
              <Typography variant="eeff">A 31 DE DICIEMBRE DEL 2021</Typography>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography align="rigth" variant="h6"></Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CabeceraEstadosFinancieros;
