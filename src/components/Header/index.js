import React from 'react'
import ContentStyled from './styled/contentStyled'

class Header extends React.Component {

    render() {
        return(
            <ContentStyled>
                <h1>Bienvenidos a Master-Components</h1>
                <p>Este sitio contiene algunos ejemplos de comonentes estilados</p>
            </ContentStyled>
        )
    }
}

export default Header