import HttpService from './http.service';

import { BACKEND_KEYS, STORAGE_KEYS } from '../common/consts/app-keys.const';
import { IUserRegisterLogin, IUserRecoverPass, IUserChangePass } from '../common/types/user.types';

class AuthService extends HttpService {
  async registerUser(body: IUserRegisterLogin) {
    const data = await this.put(
      {
        method: 'post',
        url: BACKEND_KEYS.AUTH.REGISRER,
        data: body
      },
      false
    );

    return data;
  }

  async loginUser(body: IUserRegisterLogin) {
    const { token, user } = await this.put(
      {
        method: 'post',
        url: BACKEND_KEYS.AUTH.LOGIN,
        data: body,
        withCredentials: true
      },
      false
    );

    if (token) {
      localStorage.setItem(STORAGE_KEYS.TOKEN, `Bearer ${token}`);
    }

    return user;
  }

  async recoverPassword(body: IUserRecoverPass) {
    const data = await this.put(
      {
        method: 'post',
        url: BACKEND_KEYS.AUTH.RECOVER_PASS,
        data: body
      },
      false
    );

    return data;
  }

  async changePassword({ id, oldPassword, newPassword }: IUserChangePass) {
    const data = await this.put({
      method: 'post',
      url: BACKEND_KEYS.AUTH.CHANGE_PASS(id),
      data: { oldPassword, newPassword }
    });

    return data;
  }
}

export default new AuthService();
