import React from 'react';
import { Link } from 'react-router-dom';

import StyledContainer from './styled/container';
import StyledText from './styled/text';
import StyledIcon from './styled/icon';

export default class Card extends React.Component {

    render() {
        const { title, photo, link } = this.props;
        return (
            <StyledContainer>
                <Link to={link}>
                    <StyledText variante="title">{title}</StyledText>
                    <StyledIcon src={photo} />
                </Link>
            </StyledContainer>
        )
    }
}