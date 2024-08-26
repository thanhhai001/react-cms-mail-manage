import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import * as changeKeys from "change-case/keys";
// Request
export const  requestConfig = (config: InternalAxiosRequestConfig) => {
    // do something
    config.data = changeKeys.snakeCase(config.data);
    return config
}

export const  requestError = (error: AxiosError) => {
    // do something
    return Promise.reject(error);
}

// Response
export const  responseConfig = (response: AxiosResponse) => {
    // do something
    response.data = changeKeys.camelCase(response.data);
    return response
}

export const  responseError = (error: AxiosError) => {
    // do something
    return Promise.reject(error);
}