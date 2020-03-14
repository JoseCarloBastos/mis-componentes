import React from 'react';
import StyledBase from './styled/base';
import StyledFondo from './styled/fondo';

export default class Base extends React.Component {

    render() {
        const { children, background } = this.props
        return(
            <StyledFondo background={background}>
                <StyledBase>
                    {children}
                </StyledBase>
            </StyledFondo>
            
        )
    }
}