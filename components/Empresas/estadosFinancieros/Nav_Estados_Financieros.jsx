import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'
import BottomNavigation from "@material-ui/core/BottomNavigation";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListItem from "@mui/material/ListItem";
import { Button } from "@material-ui/core";

const Nav_Estados_Financieros = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <BottomNavigation>
    <ListItem>
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
    </ListItem>
  </BottomNavigation>
  )
}



export default Nav_Estados_Financieros