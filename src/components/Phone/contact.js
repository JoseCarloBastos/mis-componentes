import React from 'react';

import StyledContainer from './styled/container';
import StyledTitle from './styled/title';
import StyledData from './styled/data';
import StyledInfo from './styled/info';
import StyledPhoto from './styled/photo.js';
import StyledIcon from './styled/icon';

export default class Contact extends React.Component {

    render() {
        const { img, nombre, numero, color, color1, border } = this.props
        return (
            <StyledContainer variante="contact" color={color} color1={color1} border={border}>

                <StyledPhoto>
                    <StyledIcon contacto src={img} />
                </StyledPhoto>

                <StyledInfo>
                    <StyledTitle>{nombre}</StyledTitle>
                    <StyledData>{numero}</StyledData>
                </StyledInfo>

            </StyledContainer>
        )
    }
}