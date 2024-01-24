import jwt from 'jsonwebtoken';

import { hashPassword, comparePasswords } from '../utils/auth.util';
import { User } from '../entities/User.entity';
import { errorMassages } from '../consts/error-massage.const';

export default class UserService {
  async registerUser(email: string, password: string) {
    const hashedPass = await hashPassword(password);
    const user = await User.create({ email, password: hashedPass }).save();
    return user;
  }

  async loginUser(email: string, password: string) {
    const user = await User.findOneBy({ email });

    if (!user) {
      throw new Error(errorMassages.USER_NOT_FOUND);
    }

    const isValidPassword = await comparePasswords(password, user.password);

    if (!isValidPassword) {
      throw new Error(errorMassages.WRONG_PASSWORD);
    }

    return user;
  }

  async getLinkForPassRecovery(email: string) {
    const user = await User.findOneBy({ email });

    if (!user) {
      throw new Error(errorMassages.USER_NOT_FOUND);
    }

    const secret = process.env.JWT_SECRET + user.password;
    const token = jwt.sign({ email: user.email, id: user.id }, secret, { expiresIn: '10m' });

    const link = `${process.env.FRONT_END}/reset/${user.id}/${token}`;

    return link;
  }

  async setNewUserPassword(id: number, token: string, password: string) {
    const user = await User.findOneBy({ id });

    if (!user) {
      throw new Error(errorMassages.USER_NOT_FOUND);
    }

    const secret = process.env.JWT_SECRET + user.password;

    try {
      jwt.verify(token, secret);

      const hashedPass = await hashPassword(password);

      user.password = hashedPass;

      await user.save();
    } catch (error) {
      throw new Error(errorMassages.NOT_VERIFIED);
    }
  }

  async changePassword(userId: number, oldPassword: string, newPassword: string) {
    const user = await User.findOneBy({ id: userId });

    if (!user) {
      throw new Error(errorMassages.USER_NOT_FOUND);
    }

    const isValidPassword = await comparePasswords(oldPassword, user.password);

    if (!isValidPassword) {
      throw new Error(errorMassages.WRONG_PASSWORD);
    }

    const hashedPass = await hashPassword(newPassword);

    user.password = hashedPass;

    await user.save();
  }
}
