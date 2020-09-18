import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: "Andre", email: "andrebordignonn@gmail.com" },
  { name: "Breno", email: "breno@hotmail.com" },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "André Bordignon", email: "andrebordignonn@gmail.com" },
      message: { subject: "Bem-vindo ao ts", body: "Welcome" },
    });

    return res.send();
  },
};
