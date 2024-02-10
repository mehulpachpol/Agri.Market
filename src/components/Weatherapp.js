
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {

    const apiKey = 'a102a93231b24e92bbb70409241002';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Weather App</h1>
          <Form>
            <Form.Group controlId="city">
              <Form.Label>Enter City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>

      {weatherData && (
        <Row className="mt-4">
        <Col>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
         
          <i className="fas fa-sun"></i>
        </Col>
      </Row>
      )}
    </Container>
  );
};

export default WeatherApp;
