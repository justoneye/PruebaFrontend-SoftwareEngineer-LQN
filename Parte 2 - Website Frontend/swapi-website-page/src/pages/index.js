import React, { Component } from 'react';

import Header from '../components/Header';
import TablaPersonajes  from '../components/TablaPersonajes';
import Footer  from '../components/Footer';

import '../styles/index.css'

class Index extends Component {
  render() {
    return (
      <div className="Page">
        <Header/> 
        <TablaPersonajes/>
        <Footer/> 
      </div>
    );
  }
}

export default Index;