import styled from 'styled-components';

const StyledIcon = styled.img`
    ${props => {
        if (props.contacto) {
            return `
                width: 100px; 
                height: 100px;
                border-radius: 50%;
            `;
        }
        return `
            width: 40px; 
            height: 40px;
            background: rgb(0,0,0,0.1);
            box-shadow: 0 0 3px 5px rgb(0,0,0,0.1);
            border-radius: 5px;
            margin: 10px;

            :hover {
                background: rgb(0,0,0,0.2);
                box-shadow: 0 0 3px 5px rgb(0,0,0,0.2);
            }
        `;
    }}
`

export default StyledIcon;