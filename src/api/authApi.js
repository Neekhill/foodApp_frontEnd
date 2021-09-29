const axios = require('axios');
const BACKEND_URL = 'http://localhost:3001';

function logInApi(email, password) {
    return axios.get(`${BACKEND_URL}/auth/login`, {
        params: {
            email: email,
            password: password
        }
    });
}

const signUpApi = (fname, lname, email, age, password) => {
    return axios.post(`${BACKEND_URL}/user/`, {
        params: {
            firstname: fname,
            lastname: lname,
            email: email,
            age: age,
            password: password
        }
    });
}

export { logInApi, signUpApi };