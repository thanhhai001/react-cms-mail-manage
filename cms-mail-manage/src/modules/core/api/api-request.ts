const apiUrl = 'http://localhost:8800/api/'

export const apiConfig = {
    baseURL: apiUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 30000 // request timeout
}

export const apiInterceptorConfig = {
    baseURL: apiUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 30000 // request timeout
}