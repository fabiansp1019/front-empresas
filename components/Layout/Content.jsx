import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';

export default function Content({children}) {
  return (
    <Paper sx={{ minHeight: '90vh', maxWidth: 936, paddingTop:0, margin: 'auto'}}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid secondary' }}
      >
        {/* <Toolbar> */}
          {children}
        {/* </Toolbar> */}
      </AppBar>
    </Paper>
  );
}