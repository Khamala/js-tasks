import axios from "axios";
const apiInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 3000,
});
export default apiInstance;
