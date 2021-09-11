import { NeatAPI } from "./axios";

export const dashboard = async (url, method, config) => {
  try {
    const result = await NeatAPI[method](url, config);
    
    return result;
  } catch (error) {
    return error
  }
}