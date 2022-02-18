import React from 'react';
import Header from './components/Header';
import MostarProdutos from './components/MostarProdutos';
import ComponenteFiltro from "./components/Filtro.js";


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ComponenteFiltro/>
        <MostarProdutos />
      </>
    );
  }
}

export default App;


