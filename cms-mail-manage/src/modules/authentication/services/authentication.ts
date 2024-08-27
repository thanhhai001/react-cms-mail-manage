import { ApiServiceBase } from '@core/services/apiServiceBase'
import { ILoginForm } from '../types';
import { ServerResponse } from 'http';
import { AxiosResponse } from 'axios';

const servicePaths = {
    login: 'login',
    logout: 'logout'
};

class AuthService extends ApiServiceBase {
    constructor() {
        super();
    }
    public login(data: ILoginForm) {
        return super.post(servicePaths.login, data, { transformResponse: (resp: AxiosResponse) => ({ status: resp.status, data: resp.data }) });
    }

    public logout() {
        return super.get(servicePaths.logout);
    }
}

export default AuthService