import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);    
    }
`

const ImageStyled = styled.img`
    width: 100px;
    height: 100px;
    margin: 20px;
    animation: ${rotate} 5s linear infinite;
`

export default ImageStyled