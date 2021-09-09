const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
      user: 'arp5alt@gmail.com',
      pass: 'zJ6-i8R-saJ-y42'
  }
}, {
  from:'Mailer job <arp5alt@gmail.com>'
}
   
);

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
      if (err) return console.log(`ОШИБКА ${err}`);
      console.log(`Succeful sent : ${info}`)
  })
}


 function SendWelcomeMessage (data) {
   console.log(data)
const message = {
  from : "arp5alt@gmail.com",
  to: data.email,
  subject: "ХАЙПОЖОР РЕГА:D",
  text: "Вы успешно зарегистрировались в дисконт сервисе ХАЙПОЖОР",
  html: `<h1>Спасибо за регистрацию</h1>
  <h2>Желаем тебе удачных покупок. Твои данные для входа ${data.email}: ${data.password}</h2>
  <h3> Хайпанем немонжоечка? </h3>`
}
mailer(message)
}


module.exports = SendWelcomeMessage;