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
    display: inline-block;
    width: 250px;
    height: 500px;
    background: linear-gradient(45deg, ${porps => porps.color}, ${props => props.color1});
    border-radius: 12px;
    margin: 50px 50px;
    text-align: center;
    padding: 10px;
    animation: ${effectBordes} 5s linear infinite;

    ${props => {
        if (props.variante==="contact") {
            return `background: white;`;
        }
    }}

    ${props => {
        if (props.border==="lightchange") {
            return `
                border: 3px solid;    
            `;
        }
    }}
`

export default StyledContainer;