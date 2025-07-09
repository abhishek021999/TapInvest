import React, { useState } from 'react';

const GeolocationDemo = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleGetLocation = () => {
    if (!('geolocation' in navigator)) {
      setError('Geolocation is not supported by your browser.');
      return;
    }
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        setError(err.message);
      }
    );
  };

  return (
    <div>
      <h2>Geolocation API Demo</h2>
      <button onClick={handleGetLocation}>Get Current Location</button>
      {location && (
        <p>Latitude: {location.lat}, Longitude: {location.lng}</p>
      )}
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
};

export default GeolocationDemo; 