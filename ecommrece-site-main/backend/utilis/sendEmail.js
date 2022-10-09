const nodemailer=require('nodemailer')
const config = require('../config')

const sendEmail=async(options)=>{
    console.log(config.SMTP_PASSWORD)
    const transpoter=nodemailer.createTransport({
        host:config.SMTP_HOST,
        port:config.SMTP_PORT,
        service:config.SMTP_SERVICE,
        auth:{
            user:config.SMTP_MAIL,
            pass:config.SMTP_PASSWORD
        },
    })

    const mailOptions={
        from:config.SMTP_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.messege,
    }

    await transpoter.sendMail(mailOptions)
}

module.exports=sendEmail;