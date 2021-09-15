import { NeatAPI } from "./axios";

/** Auth APIs */
export const auth = async (url, data, config) => {
  try {
    const result_data = await NeatAPI.post(url, data, config);

    return result_data;
  } catch (error) {

    return error.response;
  }
}

/** Dashboard APIs */
const adminURL = '/admin';

export const dashboard = {
  get: (url, config) => {
    try {
      const result = NeatAPI.get(`${adminURL}${url}`, config);
      return result;
    } catch (error) {
      return error;
    }
  },
  post: (url, data, config) => {
    try {
      const result = NeatAPI.post(`${adminURL}${url}`, data, config);
      return result;
    } catch (error) {
      return error;
    }
  },
  put: (url, data, config) => {
    try {
      const result = NeatAPI.put(`${adminURL}${url}`, data, config);
      return result;
    } catch (error) {
      return error;
    }
  }
}