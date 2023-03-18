#!/usr/bin/env node

import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { ArhpotolkiInfoStack } from './stack.lib';


const app = new App();


new ArhpotolkiInfoStack(app, 'ArhpotolkiInfoStack', {
    env: { 
        account: process.env.CDK_DEFAULT_ACCOUNT, 
        region: process.env.CDK_DEFAULT_REGION,
    },
    /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
