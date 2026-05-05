"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PSW,
    },
    family: 4, // 👈 force IPv4
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
});
const sendVerification = async (email, token) => {
    try {
        const info = await transporter.sendMail({
            from: `"Email Verification For E-store" <${process.env.EMAIL}>`, // sender address
            to: `${email}`, // list of recipients
            subject: "Hello", // subject line
            text: "Please Verify Your Email Here", // plain text body
            html: `<a href="https://e-store-c0yd.onrender.com/api/user/verify/${token}">Click Here</a>`, // HTML body
        });
        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    catch (err) {
        console.error("Error while sending mail:", err);
    }
};
module.exports = { sendVerification };
//# sourceMappingURL=verifiler.js.map