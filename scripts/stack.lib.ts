import { Stack, StackProps, CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { AnyPrincipal, Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';


const BUCKET_NAME = 'arhpotolki.info';

const SETTINGS_TABLE = 'arhpotolki.info_settings';
const FEEDBACK_TABLE = 'arhpotolki.info_feedback';
const PICTURES_TABLE = 'arhpotolki.info_pictures';


export class ArhpotolkiInfoStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const bucket = new Bucket(this, BUCKET_NAME, {
            cors: [
                {
                    allowedMethods: [
                        HttpMethods.GET,
                        HttpMethods.HEAD,
                        HttpMethods.PUT,
                        HttpMethods.POST,
                        HttpMethods.DELETE,
                    ],
                    allowedOrigins: [
                        '*',
                    ],
                    allowedHeaders: [
                        '*',
                    ],
                    exposedHeaders: [
                        'Access-Control-Allow-Origin'
                    ],
                },
            ],
            publicReadAccess: true,
            removalPolicy: RemovalPolicy.DESTROY,
        });

        bucket.addToResourcePolicy(
            new PolicyStatement({
                sid: 'Allow All',
                effect: Effect.ALLOW,
                principals: [new AnyPrincipal()],
                actions: [
                    's3:GetObject',
                    's3:ListBucket',
                    's3:PutObject',
                ],
                resources: [
                    bucket.bucketArn,
                    bucket.arnForObjects('*'),
                ],
            })
        );

        const feedbackTable = new Table(this, FEEDBACK_TABLE, {
            partitionKey: {
                name: 'id',
                type: AttributeType.STRING,
            },
            removalPolicy: RemovalPolicy.DESTROY,
        });

        const picturesTable = new Table(this, PICTURES_TABLE, {
            partitionKey: {
                name: 'id',
                type: AttributeType.STRING,
            },
            removalPolicy: RemovalPolicy.DESTROY,
        });

        const settingsTable = new Table(this, SETTINGS_TABLE, {
            partitionKey: {
                name: 'key',
                type: AttributeType.STRING,
            },
            removalPolicy: RemovalPolicy.DESTROY,
        });

        new CfnOutput(this, 'bucket', { value: bucket.bucketName });
        new CfnOutput(this, 'feedbackTable', { value: feedbackTable.tableName });
        new CfnOutput(this, 'picturesTable', { value: picturesTable.tableName });
        new CfnOutput(this, 'settingsTable', { value: settingsTable.tableName });
    }
}
