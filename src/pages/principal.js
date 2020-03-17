import React from 'react';

import Base from '../components/Base';
import Header from '../components/Header';
import Page from '../components/Page';
import Card from '../components/Card';

import { COLOR_BLUE_LIGHT } from '../styles/colors';
import CardPhoto from '../styles/icons/desconocido001.png';

class Principal extends React.Component {

    render() {
        return (
            <Base background={COLOR_BLUE_LIGHT}>
                <Header></Header>
                <Page
                    title="Pagina Principal">
                    <Card
                        photo={CardPhoto}
                        title="New"
                        link="/new" />
                    <Card
                        photo={CardPhoto}
                        title="Mapa"
                        link="/mapa" />
                    <Card
                        photo={CardPhoto}
                        title="Mobile"
                        link="/mobile" />
                </Page>
            </Base>
        )
    }

}

export default Principal