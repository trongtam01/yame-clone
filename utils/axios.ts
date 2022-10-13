import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.defaults.withCredentials = true;
// Alter defaults after instance has been created

const ISSERVER = typeof window === "undefined";

if (!ISSERVER) {
  instance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("yame-token")}`;
}

// Add a request interceptor
instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (err) {
    const status = (err && err.response && err.response.status) || 500;
    console.log(status);
    switch (status) {
      // authentication (token related issues)
      case 401: {
        // toast.error('Unauthorized the user. Please Login...')
        // window.location.href = '/login'
        return err && err.response.data;
      }

      // forbidden (permission related issues)
      case 403: {
        // toast.error(`You don't have to the permission to access this resource...`)
        return Promise.reject(err);
      }

      // bad request
      case 400: {
        return Promise.reject(err);
      }

      // not found
      case 404: {
        // if(window.location.pathname !== '/'
        //     && window.location.pathname !== '/login'
        //     && window.location.pathname !== '/register'
        //   ) {
        //     toast.error('Unauthorized the user. Please Login...')
        //   }
        return Promise.reject(err);
      }

      // conflict
      case 409: {
        return Promise.reject(err);
      }

      // unprocessable
      case 422: {
        return Promise.reject(err);
      }

      // generic api error (server related) unexpected
      default: {
        return Promise.reject(err);
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  }
);

export default instance;
