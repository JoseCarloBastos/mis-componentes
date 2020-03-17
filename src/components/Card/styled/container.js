import styled from 'styled-components';

const StyledContainer = styled.div`
    display: inline-block;
    margin: 20px;
    border-radius: 8px;
    width: 150px; height: 180px;
    background: white;
    padding: 5px;

    :hover {
        box-shadow: 0 0 4px 2px gray;
        background: rgb(225,225,225);
    }
`

export default StyledContainer;