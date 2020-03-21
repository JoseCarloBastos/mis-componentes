import styled, { keyframes } from 'styled-components';

const cargando = keyframes`
    0%{
        width: 0px;
    }
    100%{
        width: 180px;
    }
`

const StyledCarga = styled.div`
    width: 10px; height: 50px;
    margin-right: auto;
    background: white;
    border-radius: 3px;
    color: (0,0,0,0);
    font-size: 36px;
    animation: ${cargando} 2s linear infinite;
`

export default StyledCarga;