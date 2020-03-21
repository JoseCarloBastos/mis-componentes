import React from 'react'
import ButtonStyled from './styled/button'

class Button extends React.Component {

    render() {
        const { text, color, variante, onClick } = this.props
        return (
            <div>
                <ButtonStyled onClick={onClick} variante={variante} color={color}>{text}</ButtonStyled>
            </div>
        )
    }
}

export default Button