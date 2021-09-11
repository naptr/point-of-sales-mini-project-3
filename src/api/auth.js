import { NeatAPI } from './axios';


export const auth = async (url, data, config) => {
  try {
    const result_data = await NeatAPI.post(url, data, config);

    return result_data;
  } catch (error) {
    
    return error.response;
  }
}