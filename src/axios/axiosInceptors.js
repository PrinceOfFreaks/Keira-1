import axios from 'axios';


// export const axiosInstance = setup({
//   baseURL: "http://localhost:8000/api",
//   cache: {
//     maxAge: 15 * 60 * 1000,
//   },
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//     "access-control-allow-origin": "*",
//   },
// });
export const axiosInstance = axios.create({
  baseURL: "https://keria2-backend.vercel.app/api",
  // adapter: cache.adapter,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "access-control-allow-origin": "*",
  }
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance