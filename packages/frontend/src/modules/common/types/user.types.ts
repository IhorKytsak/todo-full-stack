export interface IUser {
  id: number;
  email: string;
}

export interface IUserRegisterLogin {
  email: string;
  password: string;
}

export interface IUserRecoverPass {
  email: string;
}

export interface IUserRecoverPassConfirmed {
  password: string;
  token: string;
  id: number;
}

export interface IUserChangePass {
  id: number;
  oldPassword: string;
  newPassword: string;
}
