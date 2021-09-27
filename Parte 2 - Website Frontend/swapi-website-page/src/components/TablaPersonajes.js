import React, { Component } from 'react';

import { Typography } from '@material-ui/core';

class TablaPersonajes extends Component {
  render() {
    return (
      <div className="Personajes">
        <Typography variant="h1" align="center" color="inherit" component="div">
           SWAPI
        </Typography>
        <Typography variant="subtitle1" align="center" color="inherit" component="div">
          Bienvenido al Universo Star Wars, da click en la ficha del personaje que desees consultar.
        </Typography>
      </div>
    );
  }
}

export default TablaPersonajes;