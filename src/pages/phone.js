import React from 'react';
import { Link } from 'react-router-dom';

import Base from '../components/Base/index';
import Header from '../components/Header/index';
import Button from '../components/Button/index';
import Phone from '../components/Phone/index';

import Foto from '../styles/img/miFoto.jpg'

class Mobile extends React.Component {

    render() {
        return (
            <Base>
                <Header></Header>
                <h1>Phone</h1>
                <Link to="/">
                    <Button
                        text="Back"
                        color="green"
                        variante="transparent"/>
                </Link>
                <div>
                    <Phone
                        img={Foto}
                        nombre="JOSE CARLO"
                        numero="+1 305-492-8548"
                        color="green"
                        color1="cyan"/>
                </div>
            </Base>
        )
    }

}

export default Mobile