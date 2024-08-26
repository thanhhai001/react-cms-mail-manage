import axios from 'axios'
export * from './interceptor.config'

const axiosConfig = {
    // baseURL: process.env.VITE_API_URL || "http://localhost:8800/api/",
    baseURL: "http://localhost:8000/api/",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 30000 // request timeout
  }
  
export const instanceAxios = axios.create(axiosConfig)
