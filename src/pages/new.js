import React from 'react';
import { Link } from 'react-router-dom';

import Base from '../components/Base';
import Header from '../components/Header';
import Page from '../components/Page';
import Button from '../components/Button';


class New extends React.Component {

    render() {
        return (
            <Base>
                <Header></Header>
                <Page
                    title="New">
                    <Link to="/">
                        <Button text="Back page" />
                    </Link>
                </Page>
            </Base>
        )
    }

}

export default New