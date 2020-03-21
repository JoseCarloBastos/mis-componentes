import React from 'react';

import Base from '../components/Base';
import Page from '../components/Page';
import Phone from '../components/Phone';

import Foto from '../styles/img/miFoto.jpg';

class Mobile extends React.Component {

    render() {
        return (
            <Base
                pantalla={
                    <Page
                        title="Phone">
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
                }
            />
        )
    }

}

export default Mobile