import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoiamF5YnJhaWxsZSIsImEiOiJjbHZnbjEzcXcwemZ4MmxsOWN3Znl3YzBrIn0.9Tql321iGgz7CdY_CZVTVQ'); 

const MapView = () => {
  return (
    <Mapbox.MapView 
  styleURL="mapbox://styles/mapbox/streets-v11"
>
  <Mapbox.Camera 
    defaultSettings={{
      centerCoordinate: [125.6177, 7.1801],
      zoomLevel: 10, 
    }}
  />
</Mapbox.MapView>

  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});

export default MapView;
