import React from 'react';
import StyledNavegacion from './styled/navegacion';
import Card from '../Card';
import img from '../../styles/icons/desconocido001.png';

export default class Nav extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    nombre: "New",
                    img: `${img}`,
                    url: '/new'
                },{
                    nombre: "Mapa",
                    img: `${img}`,
                    url: '/mapa'
                },{
                    nombre: "Movil",
                    img: `${img}`,
                    url: '/mobile'
                },{
                    nombre: "Cargando",
                    img: `${img}`,
                    url: '/cargando'
                },{
                    nombre: "Games",
                    img: `${img}`,
                    url: '/games/atrapalo'
                }
            ]
        }
    }

    render() {
        return (
            <StyledNavegacion>
                {this.state.data.map((item) => {
                    return (
                        <Card
                            title={item.nombre}
                            photo={item.img}
                            link={item.url}>
                        </Card>
                    )
                })}
            </StyledNavegacion>
        )
    }
}