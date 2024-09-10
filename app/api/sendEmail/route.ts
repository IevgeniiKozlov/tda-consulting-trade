import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    // Parse the request body to extract form data
    const { name, email, message } = await req.json()
    console.log(name, email, message)
    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_DOMAIN, // SMTP server address
      port: Number(process.env.SMTP_PORT), // Port for secure email sending
      auth: {
        user: process.env.SMTP_EMAIL, // SMTP username from environment variables
        pass: process.env.SMTP_PASS, // SMTP password from environment variables
      },
    })
    // If an attachment is provided, use this configuration
    const mail = {
      from: process.env.SMTP_EMAIL, // Sender's email address
      to: process.env.SMTP_EMAIL, // Recipient's email address
      subject: `New message from ${name}`, // Тема листа
      text: message, // Текст листа
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    }

    // Send the email with the configured options
    const info = await transporter.sendMail(mail)

    // Respond with success message
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    )
  } catch (err) {
    console.log(err)
    // Respond with error message if something goes wrong
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
