import React from 'react';
import './App.css';
import Header from './components/Header'
import styled from 'styled-components'
import {Home} from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Filtro from './components/Filtro/Filtro'
import Carrinho from './components/Carrinho';


import Image1 from './img/1.jpeg'
import Image2 from './img/2.jpeg'
import Image3 from './img/3.jpg'
import Image4 from './img/4.jpg'
import Image5 from './img/5.png'
import Image6 from './img/6.jpg'
import Image7 from './img/7.jpg'
import Image8 from './img/8.jpg'
import Image9 from './img/9.jpg'
import Image10 from './img/10.jpg'
import Image11 from './img/11.jpeg'
// import Image12 from './img/12.jpg'
import Image13 from './img/13.jpg'
import Image14 from './img/14.jpg'
import Image15 from './img/15.jpg'
import Image16 from './img/16.jpg'
import Image17 from './img/17.jpg'
import Image18 from './img/18.png'
import Image19 from './img/19.jpg'
import Image20 from './img/20.jpg'
import Image21 from './img/21.jpg'
import Image22 from './img/22.jpg'
import Image23 from './img/23.jpeg'
import Image24 from './img/24.jpg'
import Image25 from './img/25.jpg'




const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 15px;
  margin: 0;
  /* background-color: black; */
`

const products = [
  {
    id: 1,
    title: 'Kit Estação Espacial Astronautas',
    cost: 180,
    image: Image1,
  },
{
  id: 2,
  title: 'Ônibus espacial',
  cost: 90,
  image:Image2,
},
{
  id: 3,
  title: 'Kit de Construção Robô Sola',
  cost: 250,
  image: Image3,
},
{
  id: 4,
  title: 'Nave Espacial',
  cost: 49,
  image: Image4,
},
{
  id: 5,
  title: 'Foguete Foguete Onibus Espacial',
  cost: 55,
  image: Image5,
},
{
  id: 6,
  title: 'Estação Espacial',
  cost: 100,
  image: Image6,
},
{
  id: 7,
  title: 'Kite de Exploração Espacial Aviação',
  cost: 200,
  image: Image7,
},
{
  id: 8,
  title: 'Kite Espacial Astronauta',
  cost: 185,
  image: Image8,
},
{
  id:9 ,
  title: 'kit de construção do ônibus espacial lunar',
  cost: 200,
  image: Image9,
},
{
  id: 10,
  title: 'Ônibus Espacial Inflável',
  cost: 89,
  image: Image10,
},
{
  id: 11,
  title: 'Quebra-cabeça de brinquedo otico-espaço montessori',
  cost:50,
  image: Image11,
},

{
  id: 13,
  title: 'Bararlho da nasa',
  cost:49,
  image: Image13,
},
{
  id: 14,
  title: 'Arma Pistola Espacial',
  cost: 100,
  image: Image14,
},
{
  id: 15,
  title: 'Policial Espacial e Ladraouta',
  cost: 130,
  image: Image15,
},
{
  id: 16,
  title: 'Estação Espacial',
  cost: 250,
  image: Image16,
},
{
  id: 17,
  title: 'Nave Espacial',
  cost: 150,
  image: Image17,
},
{
  id: 18,
  title: 'Base Espacial Com Foguete',
  cost: 235,
  image: Image18,
},
{
  id: 19,
  title: 'Nave Espacial Millenium Falcon ',
  cost: 185,
  image: Image19,
},
{
  id: 20,
  title: 'Nave Mission Fieet Stellar Class Hasbroem',
  cost: 185,
  image: Image20,
},
{
  id: 21,
  title: 'Nave Mission Fieet Stellar Class Darth Vader',
  cost: 185,
  image: Image21,
},
{
  id: 22,
  title: 'Armas Espaciais',
  cost: 150,
  image: Image22,
},
{
  id: 23,
  title: 'Molde rei blocos de construção star destroyer MOC-26457 apolo11em',
  cost: 999,
  image: Image23,
},
{
  id: 24,
  title: 'Lego Exclusivos 10266 NASA Apollo 11 Lunar Landerem',
  cost: 850,
  image: Image24,
},
{
  id: 25,
  title: 'Lego Technic 42055 Bucket Wheel Excavator',
  cost: 185,
  image: Image25,
}

]

export default class App extends React.Component {
  state = {
    quantity:0,
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: []
  }


  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeTitleFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart){
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return{
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })
      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)
      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <>
      <Header/>
      <AppContainer>
        <Filtro 
        maxFilter = {this.state.maxFilter}
        minFilter = {this.state.minFilter}
        nameFilter = {this.state.nameFilter}
        onChangeMaxFilter = {this.onChangeMaxFilter}
        onChangeMinFilter = {this.onChangeMinFilter}
        onChangeTitleFilter = {this.onChangeTitleFilter}      
        />
        <Home    
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}/>
        <Carrinho 
          products={this.state.productsInCart}
          onRemoveProductFromCart ={this.onRemoveProductFromCart}
        /> 
      </AppContainer>
      <Footer/>
      </>
    );
  }
}


