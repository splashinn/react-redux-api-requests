import constants from '../constants'
import axios from 'axios';

const API_KEY = '1dccaa78ceb336062a15e6982f8fbce9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const FETCH_CITY = 'FETCH_CITY';

export function fetchUser(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url)
    console.log('from the action', request)
    return {
        type: constants.FETCH_CITY,
        payload: request
    }
}
