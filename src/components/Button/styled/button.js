import styled from 'styled-components'
import { COLOR_RED, COLOR_BLUE, COLOR_ORANGE, COLOR_PURPLE, COLOR_WHITE } from '../../../styles/colors'

const ButtonStyled = styled.button`
    border-style: solid;
    border-width: 1px;
    width: max-content;
    margin: 0px 10px;
    border-radius: 3px;

    &:hover {
        border-color: ;
        box-shadow: 0px 0px 6px gray;
    }

    ${props => {
        if (props.rounded) {
            return `border-radius: 50px;`;
        }
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
        if (props.block) {
            return `
            display: block;
            width: 50%;
          `;
        }
    }}

    ${props => {
        switch (props.color) {
            case "red":
                return `background: ${COLOR_WHITE};
                        border-color: ${COLOR_RED}; 
                        color: ${COLOR_RED}; 
                        &:hover {
                            background: ${COLOR_RED};
                            color: ${COLOR_WHITE};
                        }`;
            case "blue":
                return `background: ${COLOR_WHITE};
                        border-color: ${COLOR_BLUE}; 
                        color: ${COLOR_BLUE}; 
                        &:hover {
                            background: ${COLOR_BLUE};
                            color: ${COLOR_WHITE};
                        }`;
            case "orange":
                return `background: ${COLOR_WHITE};
                        border-color: ${COLOR_ORANGE}; 
                        color: ${COLOR_ORANGE}; 
                        &:hover {
                            background: ${COLOR_ORANGE};
                            color: ${COLOR_WHITE};
                        }`;
            default:
                return `background: ${COLOR_WHITE};
                        border-color: ${COLOR_PURPLE}; 
                        color: ${COLOR_PURPLE}; 
                        &:hover {
                            background: ${COLOR_PURPLE};
                            color: ${COLOR_WHITE};
                        }`;
        }
    }}
`
export default ButtonStyled