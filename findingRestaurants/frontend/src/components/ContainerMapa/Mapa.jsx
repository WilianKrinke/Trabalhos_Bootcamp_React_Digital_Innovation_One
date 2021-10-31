import React from 'react';
import propTypes from 'prop-types';
import { GoogleApiWrapper, Map } from 'google-maps-react';

export const Mapa = (props) => {
  const { google } = props;

  return <Map google={google} centerAroundCurrentLocation />;
};

Mapa.propTypes = {
  google: propTypes.any,
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(Mapa);
