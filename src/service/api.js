import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.ecwid.com/api/v3/28820124/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params: {
    token: 'public_U8xi9fM3mEzGzY3Nh9YJduEDXPn9PVbs',
  },
});

export default api;
