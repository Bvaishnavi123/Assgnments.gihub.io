const nodemailer = require("nodemailer");


module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "792f2c9f9424ea",
      pass: "376a7181ff4216"
    }
  });