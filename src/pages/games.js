import React from 'react';

import Base from '../components/Base';
import Page from '../components/Page';
import Atrapalo from '../components/Games/Atrapalo';

class Games extends React.Component {

    render() {
        return (
            <Base
                pantalla={
                    <Page
                        title="Games: Atrapalo">
                        <div>
                            <Atrapalo/>
                        </div>
                    </Page>
                }
            />
        )
    }

}

export default Games;