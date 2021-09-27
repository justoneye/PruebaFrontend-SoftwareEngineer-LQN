import React from 'react';

import { Card, CardContent, CardMedia, Typography, Typography } from '@material-ui/core';
import { CardActionArea } from '@mui/material';

export default function FichaPersonaje() {
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="330"
          alt="Foto Personaje"
        />
          <img src={logo} className="logo" alt="Foto Personaje"/>
        <CardMedia/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nombre Personaje
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
