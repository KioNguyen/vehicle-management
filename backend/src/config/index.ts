import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config({});
let envConfig;

switch (process.env.NODE_ENV) {
    case 'staging':
    case 'production':
    case 'development':
        envConfig = dotenv.config();
        break;
}

if (envConfig)
    for (const k in envConfig)
        process.env[k] = envConfig[k];
