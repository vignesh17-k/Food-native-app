import axios from 'axios';
import { store } from '../store/store';
import { get } from 'lodash';


const axiosInstance = axios.create({
  baseURL: 'https://food-app-backend-flame-omega.vercel.app',
  timeout: 3800 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const new_state = store.getState();
    const token = get(new_state, 'user.session.session.access_token');
    console.log(token, "token from store exist");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
      config.headers['x-client-id'] = 'WEB';
      config.headers['x-client-version'] = '0.0.1';
      config.headers['x-client-env'] = 'DEV';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.data.message);
    } else {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
