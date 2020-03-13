import styled from 'styled-components';

const StyledIcon = styled.img`
    ${props => {
        if (props.size==="small") {
            return `width: 10px; height: 10px;`;
        }
        if (props.size==="normal") {
            return `width: 16px; height: 16px;`;
        }
        if (props.size==="large") {
            return `width: 25px; height: 25px;`;
        }
    }}
`

export default StyledIcon;