import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/index'

class New extends React.Component {

    render() {
        return(
            <div>
                <Header></Header>
                <h1>New</h1>
                <Link to="/">
                    <button type="button">Back page</button>
                </Link>
            </div>
        )
    }

}

export default New