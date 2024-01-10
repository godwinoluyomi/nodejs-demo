var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sender@gmail.com",
    pass: "sendpassword",
  },
});

var mailOptions = {
  from: "sender@gmail.com",
  to: "receiver@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy! Email send successfully",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
