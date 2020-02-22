import React from 'react'
import CounterStyled from './styled/counterStyled'
import ButtonStyled from './styled/buttonStyled'

class Counter extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            count: 0,
        }
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }

    Increment(event) {
        this.setState({count: this.state.count + 1});
        return this.state;
    }

    Decrement(event) {
        this.setState({count: this.state.count - 1});
        return this.state;
    }

    render() {
        const { theme } = this.props
        return (
            <CounterStyled theme={theme}>
                <p>COUNTER</p>
                <p>{this.state.count}</p>
                <ButtonStyled theme={theme} onClick={this.Increment}>+</ButtonStyled>
                <ButtonStyled theme={theme} onClick={this.Decrement}>-</ButtonStyled>
            </CounterStyled>
        )
    }
}

export default Counter
