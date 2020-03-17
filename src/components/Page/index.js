import React from 'react';
import StyledContainer from './styled/container';

export default class Page extends React.Component {

    render() {
        const { title, children } = this.props;
        return(
            <StyledContainer>
                <h1>{title}</h1>
                {children}
            </StyledContainer>
        )
    }
}