import { AxiosRequestConfig } from 'axios'

const apiUrl = 'http://localhost:8800/api/'

export const baseConfig = (): AxiosRequestConfig => {
    return {
        baseURL: apiUrl,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        timeout: 30000 // request timeout
    }
}