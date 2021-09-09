import { Neat } from './axios';


export const auth = async (url, data, config) => {
  try {
    const result_data = await Neat.post(url, data, config);

    return result_data;
  } catch (error) {
    
    return error.response;
  }
}