import React from 'react'
import ContentStyled from './styled/contentStyled'
import ImageStyled from './styled/imageStyled'

import reactIMG from '../../styles/icons/react.png'
import htmlIMG from '../../styles/icons/html.png'
import bootstrapIMG from '../../styles/icons/bootstrap.png'
import javascriptIMG from '../../styles/icons/javascript.png'

class Header extends React.Component {

    render() {
        return(
            <ContentStyled>
                <ImageStyled src={htmlIMG}></ImageStyled>
                <ImageStyled src={reactIMG}></ImageStyled>
                <ImageStyled src={javascriptIMG}></ImageStyled>
                <ImageStyled src={bootstrapIMG}></ImageStyled>
                <h1>Bienvenidos a Master-Components</h1>
                <p>Este sitio contiene algunos ejemplos de comonentes estilados</p>
            </ContentStyled>
        )
    }
}

export default Header