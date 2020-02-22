import React from 'react'
import ButtonStyled from './styled/button'

class Button extends React.Component {

    render() {
        const { text, color } = this.props
        return (
            <div>
                <ButtonStyled color={color}>{text}</ButtonStyled>
            </div>
        )
    }
}

export default Button