import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import logo from '../multimedia/c3p0_logo.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} className="logo" alt="Graph Side logo"/>
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ¡Welcome to the Graph Side!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}