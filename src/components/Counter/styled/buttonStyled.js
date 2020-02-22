import styled from 'styled-components'
import {
    COLOR_RED,
    COLOR_WHITE,
    COLOR_BLUE,
    COLOR_YELLOW,
    COLOR_ORANGE,
    COLOR_GREEN,
    COLOR_OCEAN,
    COLOR_PURPLE,
    COLOR_PINK,
} from '../../../styles/colors'

const buttonStyled = styled.button`
    margin: 5px;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    display: bolck;
    width: 25px;

    ${props => {
        switch (props.theme) {
            case "pink":
                return `background: ${COLOR_WHITE};
                        color: ${COLOR_PINK};
                        border-color: ${COLOR_PINK};
                        &:hover {
                            background: ${COLOR_PINK};
                            color: ${COLOR_WHITE};
                        }`;
            case "blue":
                return `background: ${COLOR_WHITE};
                        color: ${COLOR_BLUE};
                        border-color: ${COLOR_BLUE};
                        &:hover {
                            background: ${COLOR_BLUE};
                            color: ${COLOR_WHITE};
                        }`;
            case "yellow":
                return `background: ${COLOR_WHITE};
                        color: ${COLOR_YELLOW};
                        border-color: ${COLOR_YELLOW};
                        &:hover {
                            background: ${COLOR_YELLOW};
                            color: ${COLOR_WHITE};
                        }`;
            case "orange":
                return `background: ${COLOR_WHITE};
                        color: ${COLOR_ORANGE};
                        border-color: ${COLOR_ORANGE};
                        &:hover {
                            background: ${COLOR_ORANGE};
                            color: ${COLOR_WHITE};
                        }`;
            case "green":
                return `background: ${COLOR_WHITE};
                        color: ${COLOR_GREEN};
                        border-color: ${COLOR_GREEN};
                        &:hover {
                            background: ${COLOR_GREEN};
                            color: ${COLOR_WHITE};
                        }`;
            case "ocean":
                return `background: ${COLOR_WHITE};
                        color: ${COLOR_OCEAN};
                        border-color: ${COLOR_OCEAN};
                        &:hover {
                            background: ${COLOR_OCEAN};
                            color: ${COLOR_WHITE};
                        }`;
            case "purple":
                return `background: ${COLOR_WHITE};
                        color: ${COLOR_PURPLE};
                        border-color: ${COLOR_PURPLE};
                        &:hover {
                            background: ${COLOR_PURPLE};
                            color: ${COLOR_WHITE};
                        }`;
            default:
                return `background: ${COLOR_WHITE};
                        color: ${COLOR_RED};
                        border-color: ${COLOR_RED};
                        &:hover {
                            background: ${COLOR_RED};
                            color: ${COLOR_WHITE};
                        }`;
        }
    }}
`

export default buttonStyled