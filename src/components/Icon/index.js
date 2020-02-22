import React from 'react'
import image from '../../styles/icons/009-notes.png'
import IconStyled from './styled/iconStyled'
import ContentStyled from './styled/contentStyled'

class Icon extends React.Component{

  render(){
    return(
      <ContentStyled>
        <IconStyled src={image} alt="Notes"/>
      </ContentStyled>
    )
  }

}

export default Icon
