import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header/index'

class Principal extends React.Component {

    render() {
        return (
            <div>
                <Header></Header>
                <h1>Pagina Principal</h1>
                <p>agregando algo</p>
                <Link to="/new">
                    <button type="button">Next page</button>
                </Link>
            </div>
        )
    }

}

export default Principal