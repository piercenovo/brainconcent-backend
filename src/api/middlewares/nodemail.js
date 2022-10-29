import nodemailer from 'nodemailer'
import nodemailerSendgrid from 'nodemailer-sendgrid'
import { SENDGRID_API_KEY } from '../../config/general.config.js'

export const sendEmailVerify = async (subject, to, html) => {
  const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: SENDGRID_API_KEY
    })
  )

  const mailOptions = {
    from: '"Brainconcent" <info@brainconcent.com>',
    subject: subject,
    to: to,
    html: html
  }

  await transporter.sendMail(mailOptions)
}
