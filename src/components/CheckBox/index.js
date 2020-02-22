import React from 'react'
import ContentStyled from './styled/contentStyled'

class CheckBox extends React.Component {

    render() {
        const { text } = this.props
        return (
            <ContentStyled>
                <input type="checkbox" id="checkbox"></input>
                <label for="checkbox">{text}</label>
            </ContentStyled>
        )
    }

}

export default CheckBox