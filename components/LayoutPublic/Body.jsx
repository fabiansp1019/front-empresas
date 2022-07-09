import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'

const Body = ({children}) => {
  return (
    <Box sx={{backgroundColor:"#F7F7F7"}}>
      <Grid container>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={8}>{children}</Grid>
        <Grid item xs={12} md={2}></Grid>
      </Grid>
    </Box>
  )
}

export default Body