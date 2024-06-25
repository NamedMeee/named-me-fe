import axios from 'axios';
import { SESSION_KEY, getSessionStorage } from 'libraries/sessionStorageUtils';

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_HOST}/api/v1`;

const token = getSessionStorage(SESSION_KEY.USER_TOKEN) ?? '';

const axiosInstance = axios.create({
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});

export { axiosInstance as authAxios };
