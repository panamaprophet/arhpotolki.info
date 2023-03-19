#!/usr/bin/env node

import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { ArhpotolkiInfoStack } from './stack.lib';


const stackName = 'arhpotolki-info-default-stack';

const app = new App();


new ArhpotolkiInfoStack(app, stackName, {
    stackName,
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
    },
});
