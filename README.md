# Weather Forecast App

'Weather Forecast App' as its name implies is an application for present and futural weather forecast of any location in the world.

### HOW TO RUN THE PROJECT LOCALLY

- `git clone https://github.com/NwekeMaxwell/weather-forecast-web-app.git`
- `cd weather-forecast-wep-app`
- `yarn install`
- `yarn dev`

  > For TESTING
- `yarn test`

## APIs
- Visual Crossing Weather API from rapidapi.com (500 requests/month)
- GeoDB API from rapidapi.com

## LIBRARIES & FRAMEWORKS
- React Vite
- Jest for testing
- axios for api requests
- React hot toast for toast notifications
- Tailwind for styling

## FUNCTIONALITIES
- Search For Cities Worldwide with city name
- View additional week ahead (+6days) forecast
- View weather conditions including - temperature, humidity, weather descriptions, wind speed and heat index
- View Current Date and Time
- View city location
- Weather icons for additional understanding of weather conditions
- Background weather image for intense understanding of weather conditions
- Loading UI
- Error handling for wrong city name, network error, etc
- Dynamic page update without page reload
- Toast notification for errors and warnings

## IMPORTANT NOTICE!
- Weather info from visual crossing weather offers only 500 requests per month
- Auto complete cities from geoDb cities offer only 1000 requests per day
