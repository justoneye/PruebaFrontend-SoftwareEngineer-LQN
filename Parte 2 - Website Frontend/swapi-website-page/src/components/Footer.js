import React from 'react';

import { Box, CssBaseline, BottomNavigation, Paper, Typography } from '@material-ui/core';

export default function FixedBottomNavigation() {
   return (
    <Box sx={{ pb: 0 }}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <Typography variant="h7" color="inherit" align="center" component="div">
          <br/>
          SWAPI Website © 2021 
          <br/>
          Desarrollada por <a href="https://www.linkedin.com/in/pilarcamargo/">Pilar Camargo Márquez</a>
          </Typography>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}