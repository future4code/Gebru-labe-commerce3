import React from "react";
import logo from "./img/logo.jpeg"; 
import carrinhoImg from "./img/pngwing.com.png";

import {Cabecalho, ImgCarrinho, ContainerInput, ImgLogo, Input} from "./Header.style";


function Header() {
  return (
    <Cabecalho>
      <ImgLogo src={logo} />
      <ContainerInput>
        <ImgCarrinho src={carrinhoImg} />
        <Input type="text" placeholder="Pesquisar..." />
      </ContainerInput>
    </Cabecalho>
  );
}

export default Header;
