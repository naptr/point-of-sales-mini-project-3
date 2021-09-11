import { proxy } from 'valtio';


export const store = proxy({
  logged_in: false,
  dashboard_url: '/dashboard',
  dashboard_visited: false,
})