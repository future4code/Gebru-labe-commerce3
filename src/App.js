import React from 'react';
import Header from './components/Header'
import MostarProdutos from './components/MostarProdutos';
// import {ComponenteFiltro} from './Components/filtro.js';
import ComponenteFiltro from './components/Filtro';

function App() {
  return (
   <>
       
      <Header/>
      <ComponenteFiltro/> 
  <MostarProdutos/>
    

   </>
  );
}

export default App;


