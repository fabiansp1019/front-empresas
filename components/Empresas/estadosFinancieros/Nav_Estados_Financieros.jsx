import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'
import { Button } from "@material-ui/core";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from "@mui/material/Box";

const Nav_Estados_Financieros = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Box sx={{ with: "100vw" }}>
    <ButtonGroup variant="text" aria-label="text button group">
      <Link href={"/private/estadosfinancieros/estadodesituacionfinanciera/"+id}>
        <Button>BALANCE</Button>
      </Link>
      <Link href={"/private/estadosfinancieros/estadoderesultadointegral/"+id}>
        <Button>RESULTADO</Button>
      </Link>
      <Link href={"/private/estadosfinancieros/agregargrupos/"+id}>
        <Button>AGREGAR CUENTAS</Button>
      </Link>
      <Link href={"/private/estadosfinancieros/plandecuentas/"+id}>
        <Button>PLAN CUENTAS</Button>
      </Link>
  </ButtonGroup>
  </Box>
  )
}



export default Nav_Estados_Financieros