import React from 'react';

import Base from '../components/Base';
import Page from '../components/Page';
import Loading from '../components/Loading';

class Cargando extends React.Component {

    render() {
        return (
            <Base
                pantalla={
                    <Page
                        title="Icono de Cargando">
                        <div>
                            <Loading></Loading>
                        </div>
                    </Page>
                }
            />
        )
    }
}

export default Cargando;