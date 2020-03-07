import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    30%{
        transform: rotate(-25deg);
    }
    45%{
        transform: rotate(0deg);
    }
    60%{
        transform: rotate(25deg);   
    }
    100% {
        transform: rotate(0deg);
    }
`

const ImageStyled = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px;

    :hover {
        animation: ${rotate} 0.2s linear infinite;
    }
`

export default ImageStyled