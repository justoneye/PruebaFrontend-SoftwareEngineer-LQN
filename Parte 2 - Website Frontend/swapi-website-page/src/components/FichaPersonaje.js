import React from 'react';

import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core';

export default function FichaPersonaje() {
  return (
    <Card sx={{ maxWidth: 330 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="330"
            image={"logo"}
            alt="Foto Personaje"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nombre Personaje
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
