import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = () => {

    const [userLocation, setUserLocation] = useState(null)

    useEffect(() => {

        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords
                    setUserLocation({lat: latitude, lng: longitude})
                },
                (error) => {
                    console.error('Error getting user location:', error.message);
                }
            )
        } else {
            console.error('Geolocation is not supported by your browser.');
        }
    }, [])

  return (
    <MapContainer center={userLocation} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default MapView