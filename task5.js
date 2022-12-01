const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "bagando@hotmail.fr",
    pass: "",
  },
});

const mailOptions = {
  from: "bagando@hotmail.fr",
  to: "ahmed.caparzo@gmail.com",
  subject: "sever test",
  text: "hello",
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("email sent: " + info.response);
  }
});
