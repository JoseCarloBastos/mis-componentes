import React from 'react';

import StyledContainer from './styled/container';
import StyledTitle from './styled/title';
import StyledData from './styled/data';
import StyledInfo from './styled/info';
import StyledPhoto from './styled/photo.js';
import StyledIcon from './styled/icon';
import StyledBotones from './styled/botones';

import IconSinVoz from '../../styles/icons/sinvoz.png';
import IconTeclado from '../../styles/icons/teclado.png';
import IconAltavoz from '../../styles/icons/altavoz.png';
import IconMas from '../../styles/icons/mas.png';
import IconVideocamara from '../../styles/icons/videocamara.png';
import IconContactos from '../../styles/icons/contactos.png';

export default class Calling extends React.Component {

    render() {
        const { img, nombre, numero, color, color1, border } = this.props
        return (
            <StyledContainer color={color} color1={color1} border={border}>

                <StyledPhoto>
                    <StyledIcon contacto src={img} />
                </StyledPhoto>

                <StyledInfo>
                    <StyledTitle>{nombre}</StyledTitle>
                    <StyledData>{numero}</StyledData>
                </StyledInfo>

                <StyledBotones>
                    <StyledIcon src={IconSinVoz}/>
                    <StyledIcon src={IconTeclado}/>
                    <StyledIcon src={IconAltavoz}/>
                    <StyledIcon src={IconMas}/>
                    <StyledIcon src={IconVideocamara}/>
                    <StyledIcon src={IconContactos}/>
                </StyledBotones>

            </StyledContainer>
        )
    }
}