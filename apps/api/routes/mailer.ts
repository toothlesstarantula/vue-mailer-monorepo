import { Router, type Request, type Response } from 'express';
import { sendVueMail } from '../utils/nodemailer';

export const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const { to, subject, template } = req.body;
    let result = await sendVueMail(to, subject, template);
    console.log('sent emai;', result);
    res.json({
        status: 'sent'
    })
})