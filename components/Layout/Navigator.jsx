import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

import Link from 'next/link';


const item = {
  py: '2px',
  px: 3,
  color: 'primary.light',
  '&:hover, &:focus': {
    color: 'primary.main',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 secondary inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <div className='primary.main'>
    <Drawer variant="permanent" {...other} >
      <List disablePadding >
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22,  }} >
          SISTEMAS DE INFORMACION
        </ListItem>
        <ListItem  sx={{ ...item, ...itemCategory }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Projectos</ListItemText>
        </ListItem>

          <Box >
            <ListItem >
              <ListItemText ></ListItemText>
            </ListItem>

            <ListItem disablePadding key={'1'}>
              <ListItemButton>
                <Link href={'/'}>
                <ListItem  selected={false} sx={item} >
                  <ListItemIcon sx={{ color: 'primary.main' }}><DnsRoundedIcon  /></ListItemIcon>
                  <ListItemText >Inicio</ListItemText>
                </ListItem>
                </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding key={'2'}>
              <ListItemButton>
                <Link href={'/private/empresas'}>
                <ListItem  selected={false} sx={item} >
                  <ListItemIcon sx={{ color: 'primary.main' }}><DnsRoundedIcon bgcolor='primary.main' /></ListItemIcon>
                  <ListItemText>Empresas</ListItemText>
                </ListItem>
                </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding key={'3'}>
                <ListItemButton>
                <Link href={'/private/listado'}>
                <ListItem selected={false} sx={item} >
                  <ListItemIcon sx={{ color: 'primary.main' }}><PeopleIcon /></ListItemIcon>
                  <ListItemText>Listado</ListItemText>
                </ListItem>
                </Link>
                </ListItemButton>
              </ListItem>


            <Divider sx={{ mt: 2 }} />
          </Box>
    
      </List>
    </Drawer>
    </div>
  );
}