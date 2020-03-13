import React from 'react';
import StyledIcon from './styled/icon';

export default class ButtonIcon extends React.Component {

    render() {
        const { icon, size } = this.props;
        return(
            <StyledIcon src={icon} size={size}/>
        )
    }
}