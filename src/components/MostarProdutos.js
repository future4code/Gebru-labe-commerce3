import React from "react";
import styled from "styled-components";

import listaProdutos from "./listaProdutos";

const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 100px;

    justify-content: center;
`

const BoxProduto = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: 50px;
  width: 300px;
  height: 400px;
  background-color: #B2EBF2;
  align-items: center;
  border-radius: 20px;
  /* box-shadow: pink; */
`;

const Produto = styled.p`
  font-size: 19px;
  color: black;
  margin-top: 20px;
  /* align-items: center; */
`;

const ImgProduto = styled.img`
  width: 250px;
  height: 250px;
`;

const TxtValor = styled.p`
    color: black;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const BtnComprar = styled.button`
    padding: 10px;
    border: 0;
    border-radius: 20px;
    color: black;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        
    }
`

export default () => {
  
  return (
    <ContainerProdutos>
      {listaProdutos.map((item) => {
        return (
          <BoxProduto>
            <ImgProduto src={item.image} />
            <Produto>{item.name}</Produto>
            <TxtValor>{item.value}</TxtValor>
            <BtnComprar>Comprar</BtnComprar>
          </BoxProduto>
        
        );
      })}
    </ContainerProdutos>
  );
};
