import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    from {
        border: 0 solid gray;
    }
    to {
        border: 5px solid gray;
    }
`

const IconStyled = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px 20px;
    border-radius: 20px;

    &:hover{
        animation: ${animation} 0.2s linear infinite;    
    }
`

export default IconStyled