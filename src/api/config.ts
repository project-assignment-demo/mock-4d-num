import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const base = "https://fdnum-web-dev.devtoz.com"

const api = axios.create({
    baseURL: base,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  export const fetchData = async <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await api.get(endpoint, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export {api};