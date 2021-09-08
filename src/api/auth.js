import { Neat } from './axios';


export const auth = async (username, password) => {
  try {
    const result_data = await Neat.post('/login', {

      'username': username,
      'password': password
    }, { timeout: 5000 });

    return result_data;
  } catch (error) {

    return error.response;
  }
}