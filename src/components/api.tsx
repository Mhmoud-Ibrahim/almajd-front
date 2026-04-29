import axios from 'axios';

const api = axios.create({
    baseURL:"https://almajd-liard.vercel.app",
    withCredentials: true 
});

export default api;