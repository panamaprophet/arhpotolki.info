module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: `s3.${process.env.AMAZON_REGION}.amazonaws.com`,
                port: '',
                pathname: `/${process.env.BUCKET_NAME}/**`,
            },
        ],
    },
};
