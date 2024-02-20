/* istanbul ignore file */
import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, validateSync } from 'class-validator';
import dotenv from 'dotenv';

export const envPath = '../../.env';
dotenv.config({});

export class EnvironmentVariables {
  @IsNotEmpty()
  ENV: string;

  @IsNotEmpty()
  PORT: number;

  @IsNotEmpty()
  DB_HOST: string;

  @IsNotEmpty()
  DB_PORT: number;

  @IsNotEmpty()
  DB_USER: string;

  @IsNotEmpty()
  DB_PASSWORD: string;

  @IsNotEmpty()
  DB_NAME: string;

  DB_LOGGING?: boolean;
}

export function setup() {
  let envConfig;

  switch (process.env.ENV) {
    case 'PROD':
    case 'DEV':
      envConfig = dotenv.config().parsed;
      break;
  }

  if (envConfig) {
    for (const k in envConfig) {
      validate({ [k]: envConfig[k] });
      process.env[k] = envConfig[k];
    }
  }
}

function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: true
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
