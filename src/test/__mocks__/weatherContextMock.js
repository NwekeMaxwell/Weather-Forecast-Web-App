import React from 'react';

const mockWeatherContext = jest.fn().mockReturnValue({
  weather: {
    wspd: 10,
    humidity: 60,
    temp: 25,
    heatindex: 28,
    conditions: 'Cloudy',
  },
  thisLocation: 'Mock Location',
  values: [
    { datetime: '2024-03-31T12:00:00', temp: 25, conditions: 'Cloudy' },
    { datetime: '2024-03-30T12:00:00', temp: 24, conditions: 'Sunny' },
    // Add more mock values as needed
  ],
});

export default mockWeatherContext;
