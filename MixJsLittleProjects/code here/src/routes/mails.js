const express = require("express");

const nodemailer = require("nodemailer");

const routerMails = express.Router();

routerMails.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(req.body);

  contentHTML = `
        <h2>You have a new message from:</h2>
        <ul>
            <li><h3>Name: ${name}</h3></li>
            <li><h3>Email: ${email}</h3></li>
            <li><h3>Phone: ${phone}</h3></li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
    `;

  console.log(contentHTML);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: USER_EMAIL,
      pass: USER_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: `"Amustino projects 👻" <${USER_EMAIL}>`,
    to: `${DESTINATION_EMAIL}, ${USER_EMAIL}`,
    subject: "Formulario de contacto",
    html: contentHTML,
  });
  console.log(" Message sent ", info.messageId);

  res.redirect("/");
});

module.exports = routerMails;
