import React from 'react';
import { Link } from 'react-router-dom';

import Base from '../components/Base';
import Header from '../components/Header';
import Page from '../components/Page';
import Button from '../components/Button';
import Phone from '../components/Phone';

import Foto from '../styles/img/miFoto.jpg';
import { COLOR_ORANGE_LIGHT } from '../styles/colors';

class Mobile extends React.Component {

    render() {
        return (
            <Base background={COLOR_ORANGE_LIGHT}>
                <Header></Header>
                <Page
                    title="Phone">
                    <Link to="/">
                        <Button
                            text="Back"
                            color=""
                            variante="transparent" />
                    </Link>
                    <div>
                        <Phone
                            img={Foto}
                            nombre="JOSE CARLO"
                            numero="+1 305-492-8548"
                            color="red"
                            color1="cyan"
                            border=""
                            variante="contact" />
                    </div>
                </Page>
            </Base>
        )
    }

}

export default Mobile