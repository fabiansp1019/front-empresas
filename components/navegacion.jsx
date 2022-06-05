import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { useAuth } from '../libs/auth'

import Link from 'next/link';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    color='primary'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
    
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


const Navegacion = () => {
  const { isSignedIn, user } = useAuth();
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >

      <AppBar position="static" color='primary'>

        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label={!isSignedIn() ? (<Link href={'/'}><Typography>Login</Typography></Link>) : (<Link href={'/'}><Typography>{user}</Typography></Link>) } {...a11yProps(0)} />
          <Tab label={!isSignedIn() ? (<Link href={'/public/about'}><Typography>about</Typography></Link>) : null} {...a11yProps(2)} />
        </Tabs>

      </AppBar>


    </div>
  );
}

export default Navegacion
