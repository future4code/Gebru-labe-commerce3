import React, { Component } from 'react';
import Header from './components/Header'
import MostarProdutos from './components/MostarProdutos';
// import {ComponenteFiltro} from './Components/filtro.js';


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MostarProdutos />
      </>
    )
  }
}

export default App;


