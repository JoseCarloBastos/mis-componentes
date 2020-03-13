import styled, { keyframes } from 'styled-components';

const effectBordes = keyframes`
    0% {
        border-color: red;
    }
    13% {
        border-color: orangered;
    }
    25% {
        border-color: orange;
    }
    38% {
        border-color: yellow;
    }
    50% {
        border-color: green;
    }
    63% {
        border-color: cyan;
    }
    75% {
        border-color: blue;
    }
    88% {
        border-color: purple;
    }
    100% {
        border-color: red;
    }
`;

const StyledContainer = styled.div`
    width: 250px;
    height: 500px;
    background: linear-gradient(45deg, ${porps => porps.color}, ${props => props.color1});
    border-radius: 12px;
    margin: 50px 50px;
    text-align: center;
    padding: 10px;
    border: 3px solid;
    animation: ${effectBordes} 5s linear infinite;
`

export default StyledContainer;