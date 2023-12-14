const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

const app = express();
app.use(cors());

const emailUser = functions.config().email.user;
const emailPassword = functions.config().email.password;

app.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    const otp = randomstring.generate({
      length: 6,
      charset: "numeric",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: email,
      subject: "OTP for Har Ghar Solar",
      html: `<h1>Your OTP is: ${otp}</h1>`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);
    res.status(201).json({ status: 201, otp });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, error: "Error sending email" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Solar Projects Firebase Functions!");
});

exports.solarAPI = functions.https.onRequest(app);

// const functions = require("@google-cloud/functions-framework");
// const nodemailer = require("nodemailer");
// const randomstring = require("randomstring");

// functions.http("register", (req, res) => {
//   if (req.method === "POST") {
//     const { email } = req.body;

//     try {
//       const otp = randomstring.generate({
//         length: 6,
//         charset: "numeric",
//       });

//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL,
//           pass: process.env.PASSWORD,
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: "OTP for Har Ghar Solar",
//         html: `<h1>Your OTP is: ${otp}</h1>`,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error("Error:", error);
//           res.status(500).send("Error sending email");
//         } else {
//           console.log("Email sent:", info.response);
//           res.status(201).send(`Email sent: ${info.response}`);
//         }
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).send("Error sending email");
//     }
//   } else {
//     res.status(405).send("Method Not Allowed");
//   }
// });
