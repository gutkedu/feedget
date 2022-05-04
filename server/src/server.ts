import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Hello World");
});

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "593318f912ee82",
    pass: "2449ae2accd0f8",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
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

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTTP server running!");
});
