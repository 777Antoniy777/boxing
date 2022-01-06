import axios from 'axios';

const BASE_URL = `http://localhost:8080`;

const Error = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    const { response } = error;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      throw error;
    }

    throw error;
  };

  axiosInstance.interceptors.response.use(onSuccess, onError);

  return axiosInstance;
};

export default createAPI;