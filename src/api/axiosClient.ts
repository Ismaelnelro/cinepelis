import axios from 'axios';
// import { apiConfig } from './apiconfig';


export const ApiCinePelis = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: import.meta.env.REACT_APP_BEARER
  }
})

