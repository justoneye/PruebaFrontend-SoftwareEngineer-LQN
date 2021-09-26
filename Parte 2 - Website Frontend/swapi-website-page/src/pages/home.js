import React from 'react';

import Header from '../components/Header';
import Footer  from '../components/Footer';

import '../styles/index.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className="Page">
        <Header/> 
        <Footer/> 
      </div>
    );
  }
}