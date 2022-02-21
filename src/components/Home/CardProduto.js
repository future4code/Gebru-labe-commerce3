import React from 'react';
import styled from 'styled-components';

const MediaBox = styled.div `
    display: flex;
    flex-direction: column;
    border: 4px solid pink;
    border-radius: 15px;
    background-color: #5dd8;
`
const AppToCard = styled.button`
    align-self: center;
    margin-top: 8px;
    border: 4px solid blue;
    border-radius: 5px;
    background-color: pink;
    color: black;
    border-radius: 10px;
    height: 40px;
    width: 130px;
    margin-bottom: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: medium;
`
const Title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
text-align: center;
    color: black;
`
const Cost = styled.div`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
`
const ImgContainer = styled.img`
 max-width: 100%;
 max-height: 100%;
 height: 150px;
 width: 200px;
 align-items:center;
`
const ContainerDiv = styled.div`
`

export class CardProduto extends React.Component {

    render(){
        const product = this.props.product
        return <ContainerDiv>
                <MediaBox>
                    <ImgContainer src={product.image} alt={product.title} width="170" height="200"/>
                    <Title><b><i>{product.title}</i></b></Title>
                    <Cost><b>R${product.cost},00</b></Cost>
                    <AppToCard onClick={() => this.props.onAddProductToCart(product.id)}>
                        COMPRAR
                    </AppToCard>
                </MediaBox>
            </ContainerDiv>
    }
}