import React from 'react';
import StyledBase from './styled/base';
import Nav from './nav';
import StyledPantalla from './styled/pantalla';

export default class Base extends React.Component {

    render() {
        const { pantalla } = this.props
        return (
            <StyledBase>
                <StyledPantalla>
                    {pantalla}
                </StyledPantalla>
                <Nav/>
            </StyledBase>
        )
    }
}