import Axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};

const axiosInstance = Axios.create({
  headers: defaultHeaders,
  timeout: 3 * 60 * 1000,
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const configTemp = { ...config };
    if (configTemp.headers) {
      const assessToken = "";
      configTemp.headers.Authorization = `Bearer ${assessToken}`;
    }
    return configTemp;
  },
  (error: any) => {
    return error;
  }
);

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    return Promise.reject(error);
  }
);

export const sendGet = (url: string, params?: any) =>
  axiosInstance
    .get(url, { params })
    .then((res) => ({ data: res.data, status: res.status }))
    .catch((err) => ({
      status: err.response?.status ? err.response?.status : 500,
      data: err.response?.data,
    }));

export const sendPost = (url: string, params = {}, queryParams = {}) =>
  axiosInstance
    .post(url, params, { params: queryParams })
    .then((res) => ({ data: res.data, status: res.status }))
    .catch((err) => ({
      status: err.response?.status ? err.response?.status : 500,
      data: err.response?.data,
    }));

export const sendPut = (url: string, params?: any) =>
  axiosInstance
    .put(url, params)
    .then((res) => ({ data: res.data, status: res.status }))
    .catch((err) => ({
      status: err.response?.status ? err.response?.status : 500,
      data: err.response?.data,
    }));

export const sendDelete = (url: string, params?: any) =>
  axiosInstance
    .delete(url, { params })
    .then((res) => ({ data: res.data, status: res.status }))
    .catch((err) => ({
      status: err.response?.status ? err.response?.status : 500,
      data: err.response?.data,
    }));
