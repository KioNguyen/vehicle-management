import { type MiddlewareFn } from 'type-graphql';

export const QueryResolveTimeMiddleware: MiddlewareFn = async ({ info }, next) => {
  //   console.log('🚀 ~ file: resolve-time.middleware.ts:4 ~ constResolveTimeMiddleware:MiddlewareFn= ~ info:', info);
  const start = Date.now();
  await next();
  const resolveTime = Date.now() - start;
  if (info.parentType.name === 'Query') {
    console.log(`${info.parentType.name}.${info.fieldName} [${resolveTime} ms]`);
  }
};
