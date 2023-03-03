import { NextApiRequest, NextApiResponse } from 'next';


const handler = async (request: NextApiRequest, response: NextApiResponse<{ success: boolean }>) => {
    const { body, method } = request;
    const payload = JSON.parse(body);

    if (method !== 'POST') {
        return response.status(404).json({ success: false });
    }

    if (!payload) {
        return response.status(400).json({ success: false });
    }

    // @todo: send to email

    response.status(200).json({ success: true });
};


export default handler;
