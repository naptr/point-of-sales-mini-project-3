import { NeatAPI } from "./axios";

const token = localStorage.getItem('token');

/** Auth APIs */
const loginURL = '/login';

export const auth = async (data, config) => {
  try {
    const result_data = await NeatAPI.post(loginURL, data, config);

    return result_data;
  } catch (error) {

    return error.response;
  }
}

/** Dashboard APIs */

export const dashboard = {
  get: (url, config) => {
    try {
      const result = NeatAPI.get(`${url}`, {
        ...config,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return result;
    } catch (error) {
      return error;
    }
  },
  post: (url, data, config) => {
    try {
      const result = NeatAPI.post(`${url}`, data, {
        ...config,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return result;
    } catch (error) {
      return error;
    }
  },
  put: (url, data, config) => {
    try {
      const result = NeatAPI.put(`${url}`, data, {
        ...config,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return result;
    } catch (error) {
      return error;
    }
  },
  delete: (url, config) => {
    try {
      const result = NeatAPI.delete(`${url}`, {
        ...config,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return result;
    } catch (error) {
      return error;
    }
  }
}