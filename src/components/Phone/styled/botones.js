import styled from 'styled-components';

const StyledBotones = styled.div`
    ${props => {
        if (props.respondercolgar) {
            return `
                margin-top: 90px;
            `;
        }
        return `
            margin-top: 30px;
        `;
    }}
`

export default StyledBotones;