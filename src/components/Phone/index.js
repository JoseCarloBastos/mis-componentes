import React from 'react';
import RenderIf from '../RenderIF';
import Callincoming from './callincoming';
import Calling from './calling';
import Contact from './contact';

export default class Phone extends React.Component {

    isCallincoming = variante => {
        if (variante === "callincoming") {
            return true;
        }
    }

    isCalling = variante => {
        if (variante === "calling") {
            return true;
        }
    }

    isContact = variante => {
        if (variante === "contact") {
            return true;
        }
    }

    render() {
        const { img, nombre, numero, color, color1, border, variante } = this.props
        return (
            <div>
                <RenderIf isTrue={this.isCallincoming(variante)}>
                    <Callincoming
                        img={img}
                        nombre={nombre}
                        numero={numero}
                        color={color}
                        color1={color1}
                        border={border}
                    />
                </RenderIf>

                <RenderIf isTrue={this.isCalling(variante)}>
                    <Calling
                        img={img}
                        nombre={nombre}
                        numero={numero}
                        color={color}
                        color1={color1}
                        border={border}
                    />
                </RenderIf>

                <RenderIf isTrue={this.isContact(variante)}>
                    <Contact
                        img={img}
                        nombre={nombre}
                        numero={numero}
                        color={color}
                        color1={color1}
                        border={border}
                    />
                </RenderIf>
            </div>
        )
    }
}