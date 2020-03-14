import React from 'react';
import { Link } from 'react-router-dom';

import Base from '../components/Base/index';
import Header from '../components/Header/index';
import Button from '../components/Button/index';

import { COLOR_BLUE_LIGHT } from '../styles/colors';

class Principal extends React.Component {

    render() {
        return (
            <Base background={COLOR_BLUE_LIGHT}>
                <Header></Header>
                <h1>Pagina Principal</h1>
                <Link to="/new">
                    <Button 
                        variante="transparent"
                        color=""
                        text="Go to new"/>
                </Link>
                <br></br>
                <Link to="/mapa">
                    <Button 
                        variante="transparent"
                        color=""
                        text="Go to map"/>
                </Link>
                <br></br>
                <Link to="/mobile">
                    <Button 
                        variante="transparent"
                        color=""
                        text="Go to phone"/>
                </Link>
            </Base>
        )
    }

}

export default Principal