import React from 'react';
import Boton from './boton';

import StyledContainer from './styled/container';
import StyledTitle from './styled/title';
import StyledData from './styled/data';
import StyledInfo from './styled/info';
import StyledPhoto from './styled/photo.js';
import StyledIcon from './styled/icon';
import StyledBotones from './styled/botones';

export default class Callincoming extends React.Component {

    render() {
        const { img, nombre, numero, color, color1, border } = this.props
        return (
            <StyledContainer color={color} color1={color1} border={border}>

                <StyledPhoto>
                    <StyledIcon src={img} />
                </StyledPhoto>

                <StyledInfo>
                    <StyledTitle>{nombre}</StyledTitle>
                    <StyledData>{numero}</StyledData>
                    <StyledData>Call incoming</StyledData>
                </StyledInfo>

                <StyledBotones>
                    <Boton
                        text="Decline"
                        variante="colgar" />
                    <Boton
                        text="Answer"
                        variante="responder" />
                </StyledBotones>
            </StyledContainer>
        )
    }
}