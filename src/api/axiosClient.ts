import axios from 'axios';
import { apiConfig } from './apiconfig';


export const ApiCinePelis = axios.create({
  baseURL: apiConfig.baseurlmovie,
  headers: {
    Accept: "application/json",
    Authorization: apiConfig.bearer
  }
})