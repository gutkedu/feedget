import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "593318f912ee82",
    pass: "2449ae2accd0f8",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendmail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Eduardo <eduardo@feedget.com>",
      subject,
      html: body,
    });
  }
}
