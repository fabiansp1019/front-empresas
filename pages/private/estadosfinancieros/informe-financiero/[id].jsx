import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutPrivate from "../../../../components/Layoutprivate";
import libs from "../../../../libs/util";
import Esfa from "../../../../libs/pdf/esfa"
import Nav_Estados_Financieros from "../../../../components/Empresas/estadosFinancieros/Nav_Estados_Financieros";
import cookie from "js-cookie";

import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const id = ({ data, empresa }) => {

const router = useRouter()

useEffect(()=>{
  setAniio1(empresa?.estadosFinancieros?.aniio1)
  setAniio2(empresa?.estadosFinancieros?.aniio2)
  setAniio3(empresa?.estadosFinancieros?.aniio3)

  setMes1i(empresa?.estadosFinancieros?.mes1i)
  setMes1f(empresa?.estadosFinancieros?.mes1f)
  setMes2i(empresa?.estadosFinancieros?.mes2i)
  setMes2f(empresa?.estadosFinancieros?.mes2f)
  setMes3i(empresa?.estadosFinancieros?.mes3i)
  setMes3f(empresa?.estadosFinancieros?.mes3f)
},[])


const [aniio1, setAniio1] = useState('');
const [aniio2, setAniio2] = useState('');
const [aniio3, setAniio3] = useState('');

const [mes1i, setMes1i] = useState('');
const [mes1f, setMes1f] = useState('');
const [mes2i, setMes2i] = useState('');
const [mes2f, setMes2f] = useState('');
const [mes3i, setMes3i] = useState('');
const [mes3f, setMes3f] = useState('');

const estadosFinancieros = {
  aniio1,
  aniio2,
  aniio3,
  mes1i,
  mes1f,
  mes2i,
  mes2f,
  mes3i,
  mes3f
}

const onClickEnviar = async()=>{
  const token = cookie.get("__session");

  const req = await axios({
    method: "put",
    url: libs.location() + "api/buscarempresaupdate/" + router.query.id,
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: {
      estadosFinancieros
    },
  });

  router.reload()
}



const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <Grid container spacing={2}>
      <Grid item xs={6}>
          <TextField id="standard-basic" label="AÑO 1"  variant="standard" onChange={(e)=>setAniio1(e.target.value)} />
          <div>{empresa?.estadosFinancieros?.aniio1}</div>
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic"   label="mes inicio" variant="standard" onChange={(e)=>setMes1i(e.target.value)} />
        <div>{empresa?.estadosFinancieros?.mes1i}</div>
        <TextField id="standard-basic"  label="mes fin" variant="standard" onChange={(e)=>setMes1f(e.target.value)} />
        <div>{empresa?.estadosFinancieros?.mes1f}</div>
      </Grid>
      <Grid item xs={6}>
      <TextField id="standard-basic"  label="AÑO 2" variant="standard" onChange={(e)=>setAniio2(e.target.value)} />
      <div>{empresa?.estadosFinancieros?.aniio2}</div>
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic"  label="mes inicio" variant="standard" onChange={(e)=>setMes2i(e.target.value)} />
        <div>{empresa?.estadosFinancieros?.mes2i}</div>
        <TextField id="standard-basic"  label="mes fin" variant="standard" onChange={(e)=>setMes2f(e.target.value)} />
        <div>{empresa?.estadosFinancieros?.mes2f}</div>
      </Grid>
      <Grid item xs={6}>
      <TextField id="standard-basic"  label="AÑO 3" variant="standard" onChange={(e)=>setAniio3(e.target.value)} />
      <div>{empresa?.estadosFinancieros?.aniio3}</div>
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic"  label="mes inicio" variant="standard" onChange={(e)=>setMes3i(e.target.value)} />
        <div>{empresa?.estadosFinancieros?.mes3i}</div>
        <TextField id="standard-basic"  label="mes fin" variant="standard" onChange={(e)=>setMes3f(e.target.value)} />
        <div>{empresa?.estadosFinancieros?.mes3f}</div>
      </Grid>
      <Grid>
        <Button onClick={onClickEnviar}>Guardar</Button>
      </Grid>
      </Grid>
      </Typography>
    </CardContent>
  </React.Fragment>
);



  return (
    <LayoutPrivate nav={<Nav_Estados_Financieros />}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
           <Esfa data={data} empresa={empresa} nombre={'Generar informe financiero'} />
        </Grid>
        <Grid item xs={4}>
            <Box sx={{ minWidth: 275 }}>
             <Card variant="outlined">{card}</Card>
            </Box>
        </Grid>

      </Grid>
    </Box>



    </LayoutPrivate>
  );
};

export async function getServerSideProps(ctx) {
  // const json = await myGet("api/listarclases", ctx);
  const token = ctx?.req?.cookies?.__session;
  const id = ctx?.params?.id

  const req = await axios({
    method: "get",
    url: libs.location() + "api/listarclases/"+id,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const reqEmp = await axios({
    method: "get",
    url: libs.location() + "api/buscarempresa/"+id,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  // console.log(req.data)
  return { props: { data: req.data, empresa: reqEmp.data } };
}

export default id;
