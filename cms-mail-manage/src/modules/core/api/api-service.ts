import axios, { Axios, AxiosRequestConfig } from "axios";

const apiUrl = 'http://127.0.0.1:8000/api/';

const apiConfig = {
    baseURL: apiUrl ?? 'http://localhost:8000/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 30000 // request timeout
}

const apiInterceptorConfig = {
    baseURL: apiUrl ?? 'http://localhost:8000/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 30000 // request timeout
}

export class ApiServiceBase {
    protected axiosInstance: Axios;
    protected useInterceptor: boolean;

    public constructor(useInterceptor?: boolean) {
        this.useInterceptor = useInterceptor ?? false
        this.axiosInstance = axios.create(this.useInterceptor ? apiInterceptorConfig : apiConfig);
    }

    protected async get(path: string, config?: AxiosRequestConfig<any> | undefined) {
        return this.axiosInstance.get(`${path}`, config)
    }

    protected async post(path: string, data: any, config?: AxiosRequestConfig<any> | undefined) {
        return this.axiosInstance.post(`${path}`, data, config)
    }

    protected async put(path: string, body: any, config?: AxiosRequestConfig<any> | undefined) {
        return this.axiosInstance.put(`${path}`, body, config)
    }

    protected async delete(path: string, config?: AxiosRequestConfig<any> | undefined) {
        return this.axiosInstance.delete(`${path}`, config)
    }
}