import axios, {Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

interface IApiServiceBase {
    get(path: string, params: {}, headers: {}): Promise<AxiosResponse<any, any>>,
    // post(): AxiosResponse,
    // put(): AxiosResponse,
    // delete(): AxiosResponse,
}

export class ApiServiceBase implements IApiServiceBase {
    baseUrl = '/api';
    path = '';
    axiosInstance: Axios;

    public constructor (
        baseUrl?: string,
    ) {
        this.baseUrl = baseUrl ?? '/api';
        this.axiosInstance = axios.create(this.getConfig())
      }

    protected getConfig (): AxiosRequestConfig {
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
        };
    }

    get (path: string, params = {}, headers = {}): Promise<AxiosResponse<any, any>> {
        return this.axiosInstance.get(`${this.baseUrl}/${path}`, { params, headers });
    }

    // public post(): void {
        
    // }
    // public put(): void {

    // }
    // public delete(): void {

    // }
}