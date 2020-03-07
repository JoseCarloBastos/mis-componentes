import React from 'react'
import ButtonStyled from './styled/button'

class Button extends React.Component {

    render() {
        const { text, color, trasnparent } = this.props
        return (
            <div>
                <ButtonStyled trasnparent={trasnparent} color={color}>{text}</ButtonStyled>
            </div>
        )
    }
}

export default Button