import mailer from '../config/mailer';

class MailService {
  async sendResetPassword(to: string, link: string) {
    await mailer.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Password reset',
      html: `
              <div>
                  <h3>Hi, there was a request to change your password!</h3>
                  <p>If you did not make this request then please ignore this email.</p>
                  <p>Otherwise, please click this link to change your password: </p>
                  <button type="button">
                    <a href="${link}">Recover Password</a>
                  </button>
                  
              </div>
            `
    });
  }
}

export const mailService = new MailService();
