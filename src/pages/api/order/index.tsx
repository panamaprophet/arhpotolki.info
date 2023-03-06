import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../../services/ses';


const EMAIL_SENDER = String(process.env.EMAIL_SENDER);
const EMAIL_RECEIVER = String(process.env.EMAIL_RECEIVER);


const handler = async (request: NextApiRequest, response: NextApiResponse<{ success: boolean }>) => {
    const { body, method } = request;
    const payload = JSON.parse(body);

    if (method !== 'POST') {
        return response.status(404).json({ success: false });
    }

    if (!payload) {
        return response.status(400).json({ success: false });
    }

    const message =
        `Площадь: ${payload.area}\n` +
        `Цвет: ${payload.colors.ceil}\n` +
        `Материал: ${payload.material}\n` +
        `Светильники: ${payload.lights}\n` +
        `Цена: ${payload.price}\n\n` +
        `Имя: ${payload.name}\n` +
        `Телефон: ${payload.phone}`;

    const result = await sendEmail({
        from: EMAIL_SENDER,
        to: EMAIL_RECEIVER,
        subject: 'Новый расчёт с сайта',
        body: message,
    });

    response.status(200).json({
        success: Boolean(result),
    });
};


export default handler;
