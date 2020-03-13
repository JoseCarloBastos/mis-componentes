import styled, { keyframes } from 'styled-components';

const effectHover = keyframes`
    0%{
        box-shadow: 0;
    }    
    50%{
        box-shadow: 0 0 0 6px rgb(0,0,0,0.2);
    }
    100%{
        box-shadow: 0;
    }
`

const StyledTelefono = styled.div`
    display: inline-block;
    width: 60px; height: 60px;
    border-radius:50%;
    border: 1px solid white;
    animation: ${effectHover} 1s linear infinite;

    > img {
        width: 50px; height: 50px;
        border-radius: 50%;
        margin-top: 5px;
    }

    > p {
        margin-top: 5px;
        color: white;
    }

    ${props => {
        if (props.variante==="responder") {
            return `
                margin-left: 25px;
                background: green;
                :hover > img {
                    background: darkgreen;
                }
            `;
        }
        if (props.variante==="colgar") {
            return `
                margin-right: 25px;
                background: red;
                > img {
                    transform: rotate(118deg);
                }
                :hover > img {
                    background: darkred;
                }
            `;
        }
    }}
`

export default StyledTelefono;