import axios from 'axios';

const jsonServer = axios.create({ baseURL: 'http://e876326f58f6.ngrok.io' });

export default jsonServer;
