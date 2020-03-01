import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header/index'

class Principal extends React.Component {

    render() {
        return (
            <div>
                <Header></Header>
                <h1>Pagina Principal</h1>
                <Link to="/new">
                    <button type="button">Go to new</button>
                </Link>
                <br></br>
                <Link to="/mapa">
                    <button type="button">Go to map</button>
                </Link>
            </div>
        )
    }

}

export default Principal