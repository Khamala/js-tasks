import axios from "axios";
const apiInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 1000,
  });
export default apiInstance;