import { IUser } from './user.types';

class UserModel implements IUser {
  id: number;

  email: string;

  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }
}

const createUserModel = (userFromServer: UserModel) =>
  new UserModel(userFromServer.id, userFromServer.email);

export { createUserModel };

export default UserModel;
