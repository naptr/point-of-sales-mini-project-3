import axios from 'axios';


export const NeatAPI = axios.create({
  baseURL: import.meta.env.SNOWPACK_PUBLIC_API_URL
})