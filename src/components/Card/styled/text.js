import styled from 'styled-components';

const StyledText = styled.p`
    color: black;
    margin-bottom: 0px;
    
    ${props => {
        if (props.variante==="title") {
            return `
                // border-bottom: 1px solid black;
                text-align: center;
                font-size: 18px;
            `;
        }
        if (props.variante==="info") {
            return `
                font-size: 14px;
            `;
        }
    }}
`

export default StyledText;