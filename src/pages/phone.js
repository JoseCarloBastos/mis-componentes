import React from 'react';

import Base from '../components/Base';
import Page from '../components/Page';
import Phone from '../components/Phone';
import Boton from '../components/Button';

import Foto from '../styles/img/miFoto.jpg';

class Mobile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            variante: 'calling',
        }
    }

    handlerOnClick() {
        let nuevo = '';
        if (this.state.variante==='calling'){
            nuevo = 'callincoming';
        }
        if (this.state.variante==='callincoming'){
            nuevo = 'contact';
        }
        if (this.state.variante==='contact'){
            nuevo = 'calling';
        }
        this.setState({
            variante: `${nuevo}`,
        })
    }

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
                                variante={this.state.variante} />
                        </div>
                        <div>
                            <Boton
                                onClick={() => this.handlerOnClick()}
                                text={this.state.variante}/>
                        </div>
                    </Page>
                }
            />
        )
    }

}

export default Mobile