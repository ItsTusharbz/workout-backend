import axios from "axios";

const baseUrl = "http://localhost:5000/";
// const baseUrl = "http://localhost:5000";

const Instance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
});

Instance.interceptors.response.use(response => {
  return response.data;
}, (error) => {
  return Promise.reject(error);
})

export default Instance;
