import styled from 'styled-components';
import React from 'react'
const ButtonContainer = styled.button`
    width: calc(100%/ ${props => props.width || 3} ) ;
    height: calc(100%/ ${props => props.height || 5});
    border: none;
    background-color: ${props => props.color || "black" };
    display: flex;
    color: white;
    border-right: 1px solid darkgray;
    border-bottom: 1px solid darkgray;

    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    :hover{
        background-color: darkgray;
    }
`

const Button = ({ value, addValue, result, width, color, height}) => {

    return (
        <ButtonContainer
            width={width}
            color={color}
            height={height}
            onClick={() => addValue ? addValue(value) : result() } 
            
        >
            {value}
        </ButtonContainer>
    )
}

export default Button