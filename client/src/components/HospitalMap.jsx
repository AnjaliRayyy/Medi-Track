// src/components/HospitalMap.jsx
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 22.804565, // Example coordinates for Jamshedpur
  lng: 86.202874
};

const HospitalMap = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      {/* You can add markers and other components here */}
    </GoogleMap>
  ) : <p>Map is loading...</p>;
};

export default HospitalMap;