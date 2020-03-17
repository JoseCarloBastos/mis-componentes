import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import Base from '../components/Base';
import Header from '../components/Header';
import Page from '../components/Page';
import Button from '../components/Button';

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
            <Base>
                <Header></Header>
                <Page
                    title="Mapa">
                    <Link to="/">
                        <Button text="Back page" />
                    </Link>
                    <br></br>
                    <div style={{ width: '50vw', height: '50vh', textAlign: 'center' }}>
                        <WrappedMap
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                            loadingElement={<div style={{ height: "100%" }} />}
                            containerElement={<div style={{ height: "100%" }} />}
                            mapElement={<div style={{ height: "100%" }} />}

                        />
                    </div>
                </Page>
            </Base>
        )
    }

}

export default Mapa