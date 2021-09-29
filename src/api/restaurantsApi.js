const axios = require('axios');

const APP_ID = "c3d92da1";
const APP_Key = " a5199ced704fa554dea57a6513a41c38";
const BACKEND_URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_Key}`;

const getRestaurants = () => {

    return axios.get(BACKEND_URL);

}

export { getRestaurants };