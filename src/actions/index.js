import axios from 'axios';

const API_KEY = '11f90f641f1385e616cc88f3bd164e57';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Defined variable and attached string to it.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},fi`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}