import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Define API Response Type (Generic)
export type ApiResponse<T> = Promise<AxiosResponse<T>>;

// Define API Client Interface
export interface ApiClient {
  get<T>(url: string, params?: Record<string, any>): ApiResponse<T>;
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): ApiResponse<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): ApiResponse<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): ApiResponse<T>;
}

// API Client Factory
const createApiClient = (baseURL: string, options: AxiosRequestConfig = {}): ApiClient => {
  const api: AxiosInstance = axios.create({
    baseURL,
    timeout: options.timeout || 10000, // Default timeout: 10s
    headers: options.headers || {},
  });

  // API Methods
  return {
    get: (url, params) => api.get(url, { params }),
    post: (url, data, config) => api.post(url, data, config),
    put: (url, data, config) => api.put(url, data, config),
    delete: (url, config) => api.delete(url, config),
  };
};

// Export the function so we can create any API instance dynamically
export default createApiClient;

export const API_BASE_URL = "https://dev.backend.4dnum.com/";