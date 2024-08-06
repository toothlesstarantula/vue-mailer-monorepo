import nodemailer from 'nodemailer';

export const sender = nodemailer.createTransport({
    host: process.env.MAILER_HOST as string,
    port: Number(process.env.MAILER_PORT),
    secure: process.env.MAILER_SECURE === 'true',
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
    },
})

export const sendVueMail = async (to: string, subject: string, template: string) => {
    if (!to || !subject || !template) {
        throw new Error('to, subject and template are required');
    }

    const mailOptions = {
        from: process.env.MAILER_USER,
        to,
        subject,
        html: template
    }

    let result = await sender.sendMail(mailOptions)
    return result;
}