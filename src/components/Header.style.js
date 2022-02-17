import styled from "styled-components";

export const Logo = styled.img`
  width: 120px;
  height: 90px;
`;

export const Login = styled.img`
 
  width: 60px;
  height: auto;
  margin-right: 70px;
  
&:hover{
        background-color: #4FC3F7;
        border-radius: 50%;
}`;

export const Carrinho = styled.img`
  width: 40px;
  height: auto;
  margin-right: 20px;
  &:hover{
        background-color: #4FC3F7;
        cursor: pointer;
        border-radius: 50%;
        padding: 2px;
    }
`;
/* export const BoxProduto= styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
  padding: 20px;
  height: 90px;
  box-shadow: azure;
`; */

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  background-color:#81D4FA;
box-shadow: inset 0 0 1em rgb(33, 99, 66), 0 0 1em rgb(15, 46, 54);
  align-items: center;
  padding: 20px;
  height: 90px;
  box-shadow: black;
`;



 export const Input = styled.input`
  border: 0;
  padding: 10px;
  width: 200px;
  border-radius: 20px;
  outline: 0;
  /* box-shadow: pink;  */
  
`; 

 export const ContainerInput = styled.div` 
   display: flex; 
  justify-content: right; 
   align-items: center; 
  margin-right: 100px;
  
`; 
