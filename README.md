# Weather Forecast App

The Weather Forecast App provides present and future weather forecasts for any location worldwide. It offers various functionalities for viewing detailed weather information, searching for cities, and more.

## Introduction

This README provides instructions for running the project locally, an overview of APIs used, libraries and frameworks, functionalities, and important notices.

## How to Run the Project Locally

1. Clone the repository:
   `git clone https://github.com/NwekeMaxwell/weather-forecast-web-app.git`
   `cd weather-forecast-web-app`
2. Install dependencies:
   `yarn install`
3. Run the development server:
   `yarn dev`
   To run tests:
   `yarn test`

## APIs

- **Visual Crossing Weather API**: Provides weather data for present and future forecasts.
- **GeoDB API**: Offers city search functionality.

## Libraries & Frameworks

- **React Vite**: Fast React framework for development.
- **Jest**: Testing framework.
- **axios**: HTTP client for API requests.
- **React hot toast**: Toast notifications.
- **Tailwind CSS**: Styling framework.

## Functionalities

- Search For Cities Worldwide with city name
- View additional week ahead (+6days) forecast
- View weather conditions including - temperature, humidity, weather descriptions, wind speed and heat index
- View Current Date and Time
- View city location
- Weather icons for additional understanding of weather conditions
- Loading UI
- Error handling for wrong city name, network error, etc
- Background weather image for intense understanding of weather conditions
- Dynamic page update without page reload
- Toast notification for errors and warnings

## Important Notice

- The Visual Crossing Weather API offers only 500 requests per month (free version).
- The GeoDB API offers only 1000 requests per day (free version).

**Please Note:** Once the API request limits are reached, weather conditions may not be fetched.
