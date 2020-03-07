import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/index';
import Button from '../components/Button/index';
import Base from '../components/Base/index';

class New extends React.Component {

    render() {
        return(
            <Base>
                <Header></Header>
                <h1>New</h1>
                <Link to="/">
                    <Button text="Back page"/>
                </Link>
            </Base>
        )
    }

}

export default New