import styled from 'styled-components';

const StyledBoton = styled.button`
    background: rgb(0,0,0,0);
    border: 2px solid rgb(0,0,0,0.6);
    color: rgb(0,0,0,0.6);
    margin-top: ${props => props.top};
    margin-left: ${props => props.left};
`

export default StyledBoton;