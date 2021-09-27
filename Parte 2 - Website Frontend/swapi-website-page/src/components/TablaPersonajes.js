import React, { Component } from 'react';

class TablaPersonajes extends Component {
  render() {
    return (
      <div className="Personajes">
        <h1 className="Personajes__Titulo">SWAPI</h1>
        <p>Bienvenido al Universo Star Wars, da click en la ficha del personaje que desees consultar.</p>
        <div className="Personajes__Lista">
        </div>
      </div>
    );
  }
}

export default TablaPersonajes;