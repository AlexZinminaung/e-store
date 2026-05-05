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

  connectionTimeout: 10000,   // 10s to establish connection
  greetingTimeout: 10000,     // 10s to wait for SMTP greeting
  socketTimeout: 10000,       // 10s of inactivity before aborting
});

// Verify transporter on startup
transporter.verify((error: Error | null) => {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("SMTP server is ready");
  }
});

const sendVerification = async (email: string, token: string) => {

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
}

module.exports = { sendVerification }