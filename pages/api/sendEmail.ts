import nodemailer from "nodemailer";
import { readFile } from "fs";
import handlebars from "handlebars";
import isEmailValid from "../../utils/isEmailValid";
import sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  const { name, to, message } = req.body;

  const msgToCustomer = {
    to,
    from: {
      email: "contato@andersonszdc.com",
      name: "Anderson 💻",
    },
    templateId: "d-965f81b126d7452f9ea760a940954230",
    dynamicTemplateData: {
      name,
      to,
    },
  };

  const msgForMe = {
    to: "contato@andersonszdc.com",
    from: {
      email: "contato@andersonszdc.com",
      name: "SITE_FORMS",
    },
    html: `<h1>${name}</h1><h1>${to}</h1><p>${message}</p>`,
  };

  sgMail
    .send(msgForMe)
    .then(() =>
      sgMail
        .send(msgToCustomer)
        .then(() => res.status(200).json({ sucess: "Mensagem enviada!" }))
        .catch((error) =>
          res.status(400).json({ message: "Erro na mensagem de confirmação!", error })
        )
    )
    .catch((error) =>
      res.status(400).json({ message: "Erro no aviso!", error })
    );
}
