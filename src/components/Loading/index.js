import React from 'react';
import StyledContainer from './styled/container';
import StyledPila from './styled/pila';
import StyledCarga from './styled/carga';

export default class Loading extends React.Component {

    render() {
        return (
            <StyledContainer>
                <StyledPila>
                    <StyledCarga>
                        Cargando...
                    </StyledCarga>
                </StyledPila>
            </StyledContainer>
        )
    }
}