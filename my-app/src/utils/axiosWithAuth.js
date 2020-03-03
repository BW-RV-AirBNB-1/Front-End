import axios from 'axios';


export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  return axios.create({
    baseURL: 'https://build-wk-4-backend-coreygumbs.herokuapp.com',
    headers: {
      "authorization": "token",
        "content-Type": "application/json"
    }
  });
};