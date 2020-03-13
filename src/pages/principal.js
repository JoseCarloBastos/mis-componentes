import React from 'react';
import { Link } from 'react-router-dom';

import Base from '../components/Base/index';
import Header from '../components/Header/index';
import Button from '../components/Button/index';

class Principal extends React.Component {

    render() {
        return (
            <Base>
                <Header></Header>
                <h1>Pagina Principal</h1>
                <Link to="/new">
                    <Button 
                        variante="transparent"
                        color="red"
                        text="Go to new"/>
                </Link>
                <br></br>
                <Link to="/mapa">
                    <Button 
                        variante="transparent"
                        color="blue"
                        text="Go to map"/>
                </Link>
                <br></br>
                <Link to="/mobile">
                    <Button 
                        variante="transparent"
                        color="green"
                        text="Go to phone"/>
                </Link>
            </Base>
        )
    }

}

export default Principal