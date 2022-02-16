import React from "react";
import logo from "./img/logo.jpeg"; 
import carrinhoImg from "./img/pngwing.com.png";

import {Cabecalho, ImgCarrinho, ContainerInput,ImgLogo, Input} from "./Header.style";
import ContainerFiltro from "./Header.style";

state = {
  produtos:listaProdutos,
  query:"",
  minPrice:"",
  maxPrice:""
}

 updateQuery = (ev) =>{
  this.state({
    query: ev.target.value
  })
}

 updateMinPrice = (ev) =>{
    this.state({
      minPrice: ev.target.value
    })
  }

updateMaxPrice = (ev) =>{
      this.state({
        maxPrice: ev.target.value
      })
}

function Header() {
  return (
    <Cabecalho>
     <ImgLogo src={logo} />
      <ContainerInput>
        <ImgCarrinho src={carrinhoImg} />
        <Input type="text" placeholder="Pesquisar..." />

        <Input 
       type="text" placeholder="filtrar"
        value ={ this.state.query}
        onChange={this.updateQuery}
         />

       <Input 
       type="number" placeholder="Preço minimo"
        value ={ this.state.query}
        onChange={this.updateMinPrice}
         />

       <Input 
       type="number" placeholder="Preço maximo"
        value ={ this.state.query}
        onChange={this.updateMaxPrice}
         />
         <span>
           <label for ="sort">ordenacao:</label>
           <select name = "sort"> </select>
           <option value="title"> title </option>
         </span>
       
        </ContainerInput>

      <listaProdutos>
        {this.state.listaProdutos
        .filter(produto => {
          return produto.title.toLowerCase().includes(this.state.query.toLowerCase())
        })
        .filter(produto =>{
          return this.state.minPrice === "" || produto.price >= this.state.minPrice
        })
        .filter(produto =>{
          return this.state.maxPrice === "" || produto.price <= this.state.maxPrice
        })
        .map( produto => {
          return boxProduto 
        })}
      </listaProdutos>

    </Cabecalho>
  );
}

export default Header;
