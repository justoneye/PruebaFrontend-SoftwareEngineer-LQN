import React, { Component } from 'react';

import { Typography } from '@material-ui/core';
import Masonry from 'react-masonry-css';

import FichaPersonaje from '../components/FichaPersonaje.js';

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
        
        <Masonry breakpointCols={4} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          <FichaPersonaje/>
        </Masonry>
      </div>      
    );
  }
}

export default TablaPersonajes;