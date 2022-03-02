import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { useAuth } from '../libs/auth'

import Link from 'next/link';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {/* {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )} */}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Navegacion = () => {
  const { isSignedIn, user } = useAuth();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static">

        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label={!isSignedIn() ? (<Link href={'/'}><Typography>Login</Typography></Link>) : (<Link href={'/'}><Typography>{user}</Typography></Link>) } {...a11yProps(0)} />
          {!isSignedIn() ? null : (<Tab label={<Link href={'/private/empresas'}><Typography>Empresas </Typography></Link>} {...a11yProps(1)}  />)}
          {!isSignedIn() ? null : (<Tab label={<Link href={'/private/listado'}><Typography>Listado </Typography></Link>} {...a11yProps(2)}  />)}
        </Tabs>

      </AppBar>
      <TabPanel value={value} index={0} >
        <Link href={'/login'}><a>login</a></Link>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      
    </div>
  );
}

export default Navegacion
