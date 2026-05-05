"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PSW,
    },
});
const sendEmail = async (email, token) => {
    try {
        const info = await transporter.sendMail({
            from: `<${process.env.EMAIL}>`, // sender address
            to: email, // list of recipients
            subject: "Email Verification.", // subject line
            text: "Click to verify your email within 5 minutes", // plain text body
            html: `<a href="http://localhost:3000/api/user/verify/${token}">click</a>`, // HTML body
        });
        console.log("Message sent: %s", info.messageId);
    }
    catch (err) {
        console.error("Error while sending mail:", err);
    }
};
module.exports = sendEmail;
//# sourceMappingURL=mailer.js.map