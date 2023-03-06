import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';


export const client = new SESClient({
    credentials: {
        accessKeyId: String(process.env.AMAZON_ACCESS_KEY),
        secretAccessKey: String(process.env.AMAZON_SECRET_KEY),
    },
    region: String(process.env.AMAZON_REGION),
});


export const sendEmail = async ({
    from,
    to,
    subject,
    body,
}: { [k: string]: string }) => {
    const result = await client.send(new SendEmailCommand({
        Destination: {
            ToAddresses: [to],
        },
        Message: {
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: body,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject,
            },
        },
        Source: from,
    }));

    return result.MessageId;
};
