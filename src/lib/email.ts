import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

interface EmailOptions {
  subject: string;
  html: string;
  text: string;
  replyTo: string;
}

export async function sendEmail({ subject, html, text, replyTo }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Your Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo,
      subject,
      text,
      html,
    });
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: (error as Error).message };
  }
}
