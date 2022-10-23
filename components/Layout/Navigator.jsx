import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BalanceIcon from "@mui/icons-material/Balance";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import Link from "next/link";

//MODULACION PARA CADA ITEM DE LA NAVEGACION IZQUIERDA
const item = {
  py: "2px",
  px: 3,
  color: "primary.dark",
  "&:hover, &:focus": {
    color: "primary.main",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 secondary inset",
  py: 1.5,
  px: 3,
};

export const dataNav = [
  {
    nombre: "Inicio",
    url: "/",
    icon: <HomeIcon sx={{ fontSize: 23 }} />,
  },
  {
    nombre: "Empresas",
    url: "/private/empresas",
    icon: <ApartmentIcon sx={{ fontSize: 23 }} />,
  },
  {
    nombre: "Usuarios",
    url: "/private/usuarios",
    icon: <PeopleIcon sx={{ fontSize: 23 }} />,
  },
  {
    nombre: "Balances",
    url: "/private/estadosfinancieros",
    icon: <BalanceIcon sx={{ fontSize: 23 }} />,
  },
];

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <div>
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem sx={{ ...item, ...itemCategory }} key={"1ax"}>
            <h3>Impuesti</h3>
          </ListItem>
          <Divider sx={{ mt: 7 }} />
          <ListItem sx={{ ...item, ...itemCategory }} key={"2ax"}>
            <ListItemIcon sx={{ color: "primary.secondary" }}>
              <AccountTreeIcon sx={{ fontSize: 23 }} />
            </ListItemIcon>
            <ListItemText>Projectos</ListItemText>
          </ListItem>

          <Divider sx={{ mt: 10 }} />
          <Box key={"3ax"}>
            <List>
              {dataNav.map((elemento, key) => {
                return (
                  // <li >
                    <ListItem disablePadding key={key + 1}>
                      <Typography>
                        <ListItemButton sx={{ padding: "0px" }}>
                          <Link href={elemento.url}>
                            <ListItem selected={false} sx={item}>
                              <ListItemIcon sx={{ color: "primary.secondary" }}>
                                {elemento.icon}
                              </ListItemIcon>
                              <ListItemText>{elemento.nombre}</ListItemText>
                            </ListItem>
                          </Link>
                        </ListItemButton>
                      </Typography>
                    </ListItem>
                  // </li>
                );
              })}
            </List>
            <Divider sx={{ mt: 5 }} />
          </Box>
        </List>
      </Drawer>
    </div>
  );
}
