const API_KEY = '6c1870426b84a00e59b637cafe06fcc5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

import axios from 'axios';

export const FETCH_WEATHER = 'Fetch_Weather';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
