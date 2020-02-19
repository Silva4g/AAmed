import React from 'react';
import { useEffect, useState } from 'react';

// import { Container } from './styles';

export default function Register() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    )
  }, []);

    return (
      <h1>Página de registro</h1>
    );
}
