import styled from 'styled-components';
import { COLOR_RED, COLOR_YELLOW, COLOR_BLUE, COLOR_ORANGE, COLOR_GREEN, COLOR_PINK, COLOR_PURPLE, COLOR_WHITE } from '../../../styles/colors';

function getColor(props) {
    switch (props.color) {
        case "purple":
            return COLOR_PURPLE;
        case "yellow":
            return COLOR_YELLOW;
        case "blue":
            return COLOR_BLUE;
        case "orange":
            return COLOR_ORANGE;
        case "green":
            return COLOR_GREEN;
        case "pink":
            return COLOR_PINK;
        default:
            return COLOR_RED;
    }
}

const ButtonStyled = styled.button`
    border-style: solid;
    border-width: 1px;
    width: max-content;
    margin: 0px 10px;

    &:hover {
        box-shadow: 0px 0px 6px gray;
    }

    ${props => {
        if (props.semi_rounded) {
            return `border-radius: 12px;`;
        }
        if (props.rounded) {
            return `border-radius: 50px;`;
        }
        return `border-radius: 3px;`;
    }}

    ${props => {
        switch (props.size) {
            case "small":
                return "font-size: 12px;";
            case "large":
                return "font-size: 20px;";
            default:
                return "font-size: 16px;";
        }
    }}

    ${props => {
        if (props.transparent==="true") {
            return `background: rgb(0,0,0,0.5);
                    border-color: ${getColor(props)}; 
                    color: ${getColor(props)}; 
                    &:hover {
                        background: ${getColor(props)};
                        color: ${COLOR_WHITE};
                    }`;
        } else {
            return `background: ${COLOR_WHITE};
                    border-color: ${getColor(props)}; 
                    color: ${getColor(props)}; 
                    &:hover {
                        background: ${getColor(props)};
                        color: ${COLOR_WHITE};
                    }`;
        }
    }}

    ${props => {
        if (props.block) {
            return `
            display: block;
            width: 50%;
          `;
        }
    }}
`
export default ButtonStyled