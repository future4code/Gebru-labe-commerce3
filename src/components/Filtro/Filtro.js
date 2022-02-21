import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
    border: 5px solid #5dd8;
    display:flex;
    align-items:center;
    flex-direction:column;
    padding: 10px;
    height:100vw;
    width: 25vw;
    border-radius: 50px;
`;
const DivLabel = styled.label`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;    
    margin-bottom:70px;
   
`;

const Title = styled.h3`
    color: black;
`
const InputContainer = styled.input`
    border-radius: 30px;
    /* border: 2px solid pink; */
    padding: 6px 6px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid rosybrown;
    background-color:pink;
    /* color: orange; */
    width: 30vh;
`
    
export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <Border>
                    <Title>Filtros de produtos</Title>
                    <DivLabel>
                        <InputContainer 
                            placeholder="Valor Mínimo"
                            type="number" 
                            min="0"
                            value={this.props.minFilter}
                            onChange={this.props.onChangeMinFilter}
                            >                                
                            </InputContainer>
                    </DivLabel>
                    <DivLabel>
                        <InputContainer
                            placeholder="Valor Máximo"
                            type="number"
                            min="0"
                            value={this.props.maxFilter}
                            onChange={this.props.onChangeMaxFilter}                            
                            ></InputContainer>
                    </DivLabel>
                    <DivLabel>
                        <InputContainer
                            placeholder="Buscar Nave" 
                            type="text"
                            value={this.props.nameFilter}
                            onChange={this.props.onChangeTitleFilter}                                               
                            ></InputContainer>
                    </DivLabel>                                        
                </Border>                
            </div>
        );
    }
}

