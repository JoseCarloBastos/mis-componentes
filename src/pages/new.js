import React from 'react';

import Base from '../components/Base';
import Page from '../components/Page';

class New extends React.Component {

    render() {
        return (
            <Base
                pantalla={
                    <Page
                        title="New">
                    </Page>
                }
            />
        )
    }

}

export default New