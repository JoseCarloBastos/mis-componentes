import React from 'react';
import { Link } from 'react-router-dom';

import Base from '../components/Base/index';
import Header from '../components/Header/index';
import Button from '../components/Button/index';
import Phone from '../components/Phone/index';

import Foto from '../styles/img/miFoto.jpg';
import { COLOR_ORANGE_LIGHT } from '../styles/colors';

class Mobile extends React.Component {

    render() {
        return (
            <Base background={COLOR_ORANGE_LIGHT}>
                <Header></Header>
                <h1>Phone</h1>
                <Link to="/">
                    <Button
                        text="Back"
                        color=""
                        variante="transparent"/>
                </Link>
                <div>
                    <Phone
                        img={Foto}
                        nombre="JOSE CARLO"
                        numero="+1 305-492-8548"
                        color="red"
                        color1="cyan"
                        border=""
                        variante="contact"/>
                </div>
            </Base>
        )
    }

}

export default Mobile