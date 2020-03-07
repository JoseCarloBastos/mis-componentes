import React from 'react';
import StyledBase from './styled/base';
import StyledFondo from './styled/fondo';

export default class Base extends React.Component {

    render() {
        const { children } = this.props
        return(
            <StyledFondo>
                <StyledBase>
                    {children}
                </StyledBase>
            </StyledFondo>
            
        )
    }
}