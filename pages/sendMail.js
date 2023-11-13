const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'notifyautobot@gmail.com',
    pass: 'Jk@kutty*1234*',
  },
});

async function sendMail(to, subject, text) {
  const mailOptions = {
    from: 'notifyautobot@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
}

export default sendMail;
