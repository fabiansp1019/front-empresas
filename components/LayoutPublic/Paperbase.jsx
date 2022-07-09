import React from 'react'
import Box from '@mui/material/Box';
import Navegacion from './navegacion'
import Footer from './Footer';

const Paperbase = ({children}) => {
  return (
    <Box sx={{margin:0, padding:0}}>
        <Navegacion />
        {children}
        <Footer />
    </Box>
  )
}

export default Paperbase