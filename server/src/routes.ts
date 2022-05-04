import express from "express";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./useCases/submitFeedbackUseCase";

export const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json("Hello World");
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
/*
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "593318f912ee82",
    pass: "2449ae2accd0f8",
  },
});

await transport.sendMail({
  from: "Equipe Feedget <oi@feedget.com>",
  to: "Eduardo <eduardo@feedget.com>",
  subject: "Novo Feedback",
  html: [
    `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
    `<p>Tipo do feedback: ${type}</p>`,
    `<p>Comentário: ${comment}</p>`,
    `</div`,
  ].join("\n"),
});
*/
