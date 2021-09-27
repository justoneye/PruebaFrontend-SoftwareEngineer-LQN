import React from 'react';

import { AppBar, Box, Toolbar, IconButton, Typography } from '@material-ui/core';

import logo from '../multimedia/c3p0_logo.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
          >
            <img src={logo} className="logo" width="64" alt="Graph Side logo"/>
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Join the Graph Side!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}