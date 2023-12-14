require("dotenv").config();
const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const admin = require("firebase-admin");

router.post("/register", (req, res) => {
  console.log(req.body);

  const { email } = req.body;
  console.log(email);

  try {
    const otp = randomstring.generate({
      length: 6,
      charset: "numeric",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "OTP for Har Ghar Solar",
      html: `<h1>Your OTP is: ${otp}</h1>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error", error);
        res.status(500).json({ status: 500, error: "Error sending email" });
      } else {
        console.log("Email sent" + info.response);
        res.status(201).json({ status: 201, otp });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(401).json({ status: 401, error: "Error generating OTP" });
  }
});

router.post("/set-custom-claims", async (req, res) => {
  const { uid, userType } = req.body;

  try {
    await admin.auth().setCustomUserClaims(uid, { userType });
    res.status(200).json({ status: 200, message: "Custom claims set." });
  } catch (error) {
    console.error("Error setting custom claims:", error);
    res
      .status(500)
      .json({ status: 500, error: "Error setting custom claims." });
  }
});

module.exports = router;
