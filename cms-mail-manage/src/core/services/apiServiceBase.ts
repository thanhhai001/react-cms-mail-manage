import {
    instanceAxios,
    requestConfig,
    requestError,
    responseConfig,
    responseError 
} from "@core/plugins/axios";

export abstract class ApiServiceBase{
    protected instance = instanceAxios

    constructor() {
        this.instance.interceptors.request.use(requestConfig, requestError);
        this.instance.interceptors.response.use(responseConfig, responseError);
    }
    protected get (path: string, params = {}, headers = {}) {
        return this.instance.get(`${path}`, { params, headers });
    }
    protected post (path: string, body = {} , params = {}) {
        return this.instance.post(`${path}`, body, { params });
    }
    protected put (path: string, body= {}, params = {}) {
        return this.instance.patch(`${path}`, body, { params });
    }
    protected delete (path: string, params = {}) {
        return this.instance.delete(`${path}`, { params });
    }
}