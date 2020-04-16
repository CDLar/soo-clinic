import React, { Component } from 'react';
import GoogleMapReact from 'react-google-maps';

function Map() {
    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAK_LgrzatV4KZsNOBQ2jXjUJxjlbFAMZs' }}
            defaultCenter={{ lat: 59.95, lng: 30.33 }}
            defaultZoom={11}
        />

    )
}

export default Map;