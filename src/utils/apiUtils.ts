// This module sets up a alohaAppAPI Axios instance for making HTTP requests to an API.
// It includes common configuration settings, request interceptors for adding a token to headers,
// and response interceptors for handling API errors. Additionally, it provides a function
// getErrorMessage to extract error messages from API responses.

import {BASE_URL} from '../constants/apiConstants';
import axios, {AxiosError, AxiosResponse} from 'axios';

// Common configuration settings for Axios requests.
const commonConfig = {
  timeout: 60 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

// Function to create the alohaAppAPI Axios instance, optionally with a token for authentication.
export const alohaAppAPI = (token?: string) => {
  const alohaAppInstance = axios.create({
    ...commonConfig,
    baseURL: BASE_URL,
  });

  // Request interceptor to add the token to headers if provided and start a new trace for performance tracking.
  alohaAppInstance.interceptors.request.use(
    async config => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  // Response interceptor to handle API errors in the response data and stop the trace for performance tracking.
  alohaAppInstance.interceptors.response.use(
    async (response: AxiosResponse) => {
      const {data} = response || {};
      const {api_error, err} = data || {};
      if (api_error || err) {
        return Promise.reject(new Error(api_error || err));
      }
      return response;
    },
    async (error: AxiosError) => {
      const {response, request} = error || {};
      const data = response?.data;
      console.log('response: ', data);
      return Promise.reject(response || request);
    },
  );

  return alohaAppInstance;
};

// Interface for response errors that includes AxiosResponse and Error properties.
interface responseError extends AxiosResponse, Error {
  data:
    | {
        api_error?: string;
        error?: string;
        status_code?: number;
        error_code?: string;
      }
    | string;
}

// Function to extract error messages from API responses.
export const getErrorMessage = (
  error: responseError,
  errorheader: string = '',
) => {
  const {data, message} = error || {};
  if (typeof data === 'string') {
    const FINAL_ERROR = data || message;
    console.log('ERROR', errorheader, FINAL_ERROR);
    return FINAL_ERROR;
  } else {
    const {error: error1 = '', api_error: error2 = ''} = data || {};
    const API_ERROR = error2 || error1;
    const FINAL_ERROR = API_ERROR || message;
    console.log('ERROR', errorheader, FINAL_ERROR);
    return FINAL_ERROR;
  }
};
