import { handleResponse, handleError } from './response'; 

const BASE_URL = 'https://dash-formula-one-api.herokuapp.com'
const BASE_URL_DEV = ''

const getData = (resources) => {
    return fetch(`${BASE_URL}/${resources}`)
        .then(handleResponse)
        .catch(handleError)
}

export const DashAPI = {
    getData
}