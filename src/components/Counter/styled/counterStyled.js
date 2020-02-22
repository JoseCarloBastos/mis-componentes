import styled from 'styled-components'
import {COLOR_RED, 
        COLOR_WHITE,
        COLOR_BLUE,
        COLOR_YELLOW,
        COLOR_ORANGE,
        COLOR_GREEN,
        COLOR_OCEAN,
        COLOR_PURPLE,
        COLOR_PINK
      } from '../../../styles/colors'

const CounterStyled = styled.div`
  padding: 20px;
  border-width: 1px;
  border-style: solid;
  width: max-content;
  margin: 50px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px gray;
  text-align: center;

  ${props => {
    switch (props.theme) {
      case "pink":
        return `background: ${COLOR_WHITE};
                color: ${COLOR_PINK};
                border-color: ${COLOR_PINK};`;
      case "blue":
        return `background: ${COLOR_WHITE};
                color: ${COLOR_BLUE};
                border-color: ${COLOR_BLUE};`;
      case "yellow":
        return `background: ${COLOR_WHITE};
                color: ${COLOR_YELLOW};
                border-color: ${COLOR_YELLOW};`;
      case "orange":
        return `background: ${COLOR_WHITE};
                color: ${COLOR_ORANGE};
                border-color: ${COLOR_ORANGE};`;
      case "green":
        return `background: ${COLOR_WHITE};
                color: ${COLOR_GREEN};
                border-color: ${COLOR_GREEN};`;
      case "ocean":
        return `background: ${COLOR_WHITE};
                color: ${COLOR_OCEAN};
                border-color: ${COLOR_OCEAN};`;
      case "purple":
        return `background: ${COLOR_WHITE};
                color: ${COLOR_PURPLE};
                border-color: ${COLOR_PURPLE};`;
      default:
        return `background: ${COLOR_WHITE};
                color: ${COLOR_RED};
                border-color: ${COLOR_RED};`;
    }
  }}
`

export default CounterStyled
