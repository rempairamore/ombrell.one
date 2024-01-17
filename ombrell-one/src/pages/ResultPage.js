import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';

export default function ResultPage() {
  
  const {lon, lat} = useParams();
  const [datiMeteo, setDatiMeteo] = useState({
    "coord": {
      "lon": 9.1895,
      "lat": 45.4643
    },
    "weather": [
      {
        "id": 300,
        "main": "Drizzle",
        "description": "pioggerella",
        "icon": "09d"
      },
      {
        "id": 701,
        "main": "Mist",
        "description": "foschia",
        "icon": "50d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 3.53,
      "feels_like": 2.22,
      "temp_min": 2.59,
      "temp_max": 4.91,
      "pressure": 1003,
      "humidity": 93
    },
    "visibility": 1500,
    "wind": {
      "speed": 1.54,
      "deg": 80
    },
    "clouds": {
      "all": 75
    },
    "dt": 1705502680,
    "sys": {
      "type": 2,
      "id": 2012644,
      "country": "IT",
      "sunrise": 1705474713,
      "sunset": 1705507634
    },
    "timezone": 3600,
    "id": 3173435,
    "name": "Wait a sec",
    "cod": 200
  });
  const [iconUrl, setIconUrl] = useState({});


  useEffect(() => {
    let url = 'https://api.openweathermap.org/data/2.5/weather?appid=b676d26981cfc01e768359ad4158fe8a&lang=it&units=metric'
    axios(url+'&lon='+lon+'&lat='+lat).then((response) => {
        setDatiMeteo(response.data)
        setIconUrl('http://openweathermap.org/img/wn/'+response.data.weather[0].icon+'@2x.png')
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    
  }, [lat, lon])
  
  
    return (
        <Container>
            <h1 className='text-center titoloCity'>{datiMeteo.name}</h1>
            <div className='d-flex justify-content-around'>
  <Row>
    <Col className='d-flex flex-column align-items-center justify-content-center m-0'>
      <span className='veryBig p-0'>{datiMeteo.main && datiMeteo.main.temp.toFixed(1)}&deg;</span>
      <span className='middleSize p-0'>{datiMeteo.main && datiMeteo.main.humidity}%</span>
    </Col>
  </Row>
  <Row>
    <Col className='d-flex flex-column align-items-center justify-content-center m-0'>
      <img className='immagineDettaglio' alt='icona' src={iconUrl} />
      <span className='middleSize p-0'>{datiMeteo.weather && datiMeteo.weather[0].description}</span>
    </Col>
  </Row>
</div>

        </Container>
  )
}
