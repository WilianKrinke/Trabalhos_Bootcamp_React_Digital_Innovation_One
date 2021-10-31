import React, { useState } from 'react';
import propTypes from 'prop-types';
import { GoogleApiWrapper, Map } from 'google-maps-react';

export const Mapa = (props) => {
  const { google } = props;

  const [map, setMap] = useState(null);

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);

    const request = { location: center, radius: '20000', type: ['restaurant'] };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('Resultados>' + results);
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return <Map google={google} zoom={14} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady} />;
};

Mapa.propTypes = {
  google: propTypes.any,
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(Mapa);
