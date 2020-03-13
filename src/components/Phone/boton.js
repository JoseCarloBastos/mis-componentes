import React from 'react';

import img from '../../styles/icons/telefono.png';

import StyledTelefono from './styled/telefono';

export default class Boton extends React.Component {

    render() {
        const { text, variante } = this.props;
        return(
            <StyledTelefono variante={variante}>
                <img src={img} alt=""/>
                <p>{text}</p>
            </StyledTelefono>
        )
    }
}