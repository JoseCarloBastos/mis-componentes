import styled from 'styled-components';

const StyledBase = styled.div`
    width: 1080px; height: 100%;
    position: center;
    margin:auto;
    background-image: url(${props => props.background});
    background: rgb(0,0,0,0.2);
`

export default StyledBase;