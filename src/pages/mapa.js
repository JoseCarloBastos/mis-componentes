import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import Base from '../components/Base';
import Page from '../components/Page';

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
        >

        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

class Mapa extends React.Component {

    render() {
        return (
            <Base
                pantalla={
                    <Page
                        title="Mapa">
                        <div style={{ width: '90%', height: '50vh', marginLeft: 'auto', marginRight: 'auto' }}>
                            <WrappedMap
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                                loadingElement={<div style={{ height: "100%" }} />}
                                containerElement={<div style={{ height: "100%" }} />}
                                mapElement={<div style={{ height: "100%" }} />}

                            />
                        </div>
                    </Page>
                }
            />
        )
    }

}

export default Mapa