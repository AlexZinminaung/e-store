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

const sendVerification = async (email: string, token: string) => {

    try {
        const info = await transporter.sendMail({
            from: `"Email Verification For E-store" <${process.env.email}>`, // sender address
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