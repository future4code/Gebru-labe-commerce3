import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.jpeg';
// import Login from '../img/iconelogin.png'


const StyledHeader = styled.header`
     
    display: flex;
  justify-content: space-between;
  background-color:#5dd8;
box-shadow: inset 0 0 1em rgb(33, 99, 66), 0 0 1em rgb(15, 46, 54);
  align-items: center;
  padding: 100;
  height: 100px;
  box-shadow: black;
  
`;

const StyledLogo = styled.img`
    width: 5vw;
    margin: 25px 20px 25px 30px;
    
`;


const StyledInput = styled.input`
    width:500px;
    height: 40px;
    border-radius: 10px;
    background-color: pink;
    font-size: 20px;
    text-align: center;
    margin-left: 100px;
`;

// const StyledButtonSearch = styled.button`
//     width: 30px;
//     height: 20%;
//     background-color: black;
//     border: 0;
//     margin-left: -40px;
// `;


const StyledLogin = styled.img`
    width: 70px;
    padding: 0;
    
`;


class Header extends React.Component {

    render () {

        return (
            <StyledHeader> <StyledLogo src= {Logo} alt="SpaceToy" />
               
               
                <StyledInput placeholder='O que você tá procurando?'/>
                <StyledHeader><StyledLogin src="Login" alt="login"/></StyledHeader>
            </StyledHeader>

        )  
    }
}

export default Header;