   import axios from 'axios';
   

   const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
   const FETCH_CITY = 'FETCH_CITY';

   export function fetchUser(city) {
       const url = `${ROOT_URL}&q=${city},us`;
       const request = axios.get(url)
       return {
           type: FETCH_CITY,
           payload: request
       }
   }
