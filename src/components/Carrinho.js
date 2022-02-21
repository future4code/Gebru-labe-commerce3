import React from 'react'
import styled from 'styled-components'


const Cart = styled.div `
    border: 5px solid #5dd8;
    display: flex;
    align-content: space-between;
    padding-top: 2vw;
    align-items: center;
    justify-content: flex-start;
    height:100vw;
    flex-direction: column;
    border-radius: 20px;
    color: black;
`
const TituloCarrinho = styled.h3 `
    text-align:center;
    color: black;
    margin-top: 30px;
`
const Product = styled.div `
    display: flex;
    margin-top: 5vw;
    align-content: space-between;
    color:black;
`
const Quantity = styled.p `
    padding-right: 10px;
    color: black;
`
const ProductName = styled.p `
    padding-right: 10px;
    color: black;
`
const Remove = styled.button `
    height:30px;
    width:40px;
    border-color:black;
    border-radius:4px;
    background-color: pink;
    padding-bottom:10px;
    font-size: 1.5em;
    text-align:center;
    font-weight:bolder;
 
`
const TotalValue = styled.div `
    margin-top: 5vw;
    color: black;
    font-weight:bolder;
`
export default class Carrinho extends React.Component {
    getTotalValue = () => {
        let totalValue = 0
        for(let product of this.props.products) {
          totalValue += product.cost * product.quantity    
        }
        return totalValue
    }
    render() {
        return (
            <Cart>
                <TituloCarrinho>Carrinho</TituloCarrinho>
                {
                    this.props.products.map(item => (
                        <Product>
                            <Quantity>{item.quantity}</Quantity>
                            <ProductName>{item.title}</ProductName>
                            <Remove onClick={()=>this.props.onRemoveProductFromCart(item.id)}> - </Remove>
                        </Product>
                ))
                }
                <TotalValue>Valor total: R${this.getTotalValue()}</TotalValue>
            </Cart>
        );
    }
}