import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://build-wk-4-backend-coreygumbs.herokuapp.com',
    headers: {
        Authorization: token,
        // "content-Type": "application/json"
    }
  });
};