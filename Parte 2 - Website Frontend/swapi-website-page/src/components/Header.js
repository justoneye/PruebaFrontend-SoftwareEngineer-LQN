import React from 'react';

import { AppBar, Box, Toolbar, IconButton, Typography } from '@material-ui/core';

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
            Join the Graph Side!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}