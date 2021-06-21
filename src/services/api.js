import axios from 'axios'

// key ca1031f83e1072d4ba7d55ee59834c055abf02eb

//base url https://api-ssl.bitly.com/v4/

export const key = 'ca1031f83e1072d4ba7d55ee59834c055abf02eb'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;

