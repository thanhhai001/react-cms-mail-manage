import { ApiServiceBase } from '@core/services/apiServiceBase'
import { ILoginForm } from '../types';

const servicePaths = {
    login: 'login',
    logout: 'logout'
};

class AuthService extends ApiServiceBase {
    constructor() {
        super();
    }
    public login (data: ILoginForm) {
        return this.post(servicePaths.login, data);
    }

    public logout () {
        return this.get(servicePaths.logout);
    }
}

export default AuthService