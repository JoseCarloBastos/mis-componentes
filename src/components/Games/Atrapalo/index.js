import React from 'react';
import StyledContainer from './styled/container';
import StyledBoton from './styled/boton';

export default class Atrapalo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            top: '50%',
            left: '50%',
        }
    }

    handlerOnMouseOver() {
        let xtop = this.aleatorio();
        let xleft = this.aleatorio();
        this.setState({
                top: `${xtop}%`,
                left: `${xleft}%`,
        })
    }

    aleatorio() {
        return Math.round(Math.random() * 100);
    }

    render() {
        return (
            <StyledContainer>
                <StyledBoton
                    top={this.state.top}
                    left={this.state.left}
                    onMouseOver={() => this.handlerOnMouseOver()}
                >Click Me</StyledBoton>
            </StyledContainer>
        )
    }
}