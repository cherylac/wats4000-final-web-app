import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openaq.org/v1/latest'
})

    