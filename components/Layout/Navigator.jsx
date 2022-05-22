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
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";

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
    icon: <DnsRoundedIcon />,
  },
  {
    nombre: "Empresas",
    url: "/private/empresas",
    icon: <DnsRoundedIcon />,
  },
  {
    nombre: "Usuarios",
    url: "/private/listado",
    icon: <PeopleIcon />,
  },
  {
    nombre: "Balances",
    url: "/private/estadosfinancieros",
    icon: <DnsRoundedIcon />,
  },
];

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <div >
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem sx={{ ...item, ...itemCategory, fontSize: 22 }} key={'1ax'}>
            System
          </ListItem>
          <Divider sx={{ mt: 7 }} />
          <ListItem sx={{ ...item, ...itemCategory }} key={'2ax'}>
            <ListItemIcon sx={{ color: "primary.secondary" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Projectos</ListItemText>
          </ListItem>

          <Divider sx={{ mt: 10 }} />
          <Box key={'3ax'}>
            <List>
              {/* <ListItem>
                <ListItemText></ListItemText>
              </ListItem> */}
              {dataNav.map((elemento, key) => {
                return (
                  <>
                    <ListItem disablePadding key={key + 1}>
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
                    </ListItem>
                  </>
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
