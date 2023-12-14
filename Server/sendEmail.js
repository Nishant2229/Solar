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

exports.sendEmail = functions.https.onRequest(app);
