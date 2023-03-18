import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: "info@autodepart.com",
        pass: process.env.password,
      },
    });

    let info = {
      from: "info@autodepart.com",
      subject: "Auto De Part",
      html: `
      <div>
        <b style="display: block;">Gönderen kişi: ${req.body.fullName}</b> <br />
        <b style="display: block;">Gönderen email: ${req.body.email}</b> <br />
        <b style="display: block;">Gönderen telefon: ${req.body.phoneNumber}</b> <br />
        <b style="display: block;">Yorum: ${req.body.message}</b>
      </div>`,
      to: "info@autodepart.com",
    };

    transporter.sendMail(info, (err, info) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(info);
      }
    });
  }
}
