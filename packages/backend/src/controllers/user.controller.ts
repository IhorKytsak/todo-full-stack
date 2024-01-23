import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';

import { errorMassages } from '../consts/error-massage.const';
import { User } from '../entities/User.entity';
import UserService from '../services/user.service';
import { mailService } from '../services/mail.service';

export class UserController {
  constructor(private userService: UserService) {}

  async registerUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const existingUser = await User.findOneBy({ email });

    if (existingUser) {
      throw new Error(errorMassages.EMAIL_EXISTS);
    }

    const user = await this.userService.registerUser(email, password);

    res.send({ id: user.id, email: user.email });
  }

  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await this.userService.loginUser(email, password);
    const token = jwt.sign({ email, id: user.id }, process.env.JWT_SECRET);

    res.send({ token, user: { id: user.id, email: user.email } });
  }

  async recoverUserPassword(req: Request, res: Response) {
    const { email } = req.body;
    const { id } = await this.userService.getUserForPassRecovery(email);
    mailService.sendResetPassword(email, `${process.env.FRONT_END}/reset/${id}`);

    res.send({ message: 'Check your email' });
  }

  async changeUserPassword(req: Request, res: Response) {
    const { oldPassword, newPassword } = req.body;
    const useriId = Number(req.params.id);

    await this.userService.changePassword(useriId, oldPassword, newPassword);

    res.send({ message: 'Password changed successfully' });
  }
}

const userController = new UserController(new UserService());
export default userController;
