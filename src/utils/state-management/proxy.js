import { proxy } from 'valtio';


export const store = proxy({
  logged_in: false,
})