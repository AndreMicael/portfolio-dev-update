const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use false para STARTTLS; true para SSL na porta 465
  auth: {
    user: process.env.EMAIL, // email do remetente
    pass: process.env.PASSWORD, // senha do remetente",
  },
});

app.get("/", function (req, res) {
  res.send(`rodando na porta ${process.env.PORT}`);
});

app.get("/enviar-email", function (req, res) {});

app.listen(process.env.PORT || 4000, () => {});
