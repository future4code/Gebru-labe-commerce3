import React from "react";
import logo from "./img/logo.jpeg"; 
import carrinho from "./img/carrinho.png";
import login from "./img/login5.jpg"

import {Cabecalho, Carrinho, ContainerInput, Logo,Login,Input} from "./Header.style";


function Header() {
  return (
    <Cabecalho>
      <Logo src={logo} />
      
      <ContainerInput>
      <Carrinho src={carrinho} />
        <Input type="text" placeholder="Produto..." />
       
      </ContainerInput>
      <Login src={login} />
    </Cabecalho>
    
  );
}

export default Header;
