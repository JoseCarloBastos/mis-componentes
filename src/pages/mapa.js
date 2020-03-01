import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/index';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

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
            <div>
                <Header></Header>
                <h1>Mapa</h1>
                <Link to="/">
                    <button type="button">Back page</button>
                </Link>
                <br></br>
                <div style={{width: '50vw', height: '50vh', textAlign: 'center'}}>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}

                    />
                </div>
            </div>
        )
    }

}

export default Mapa