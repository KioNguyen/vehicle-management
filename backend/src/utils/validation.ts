import { GraphQLError } from 'graphql/error';
import { ApolloServerErrorCode } from '@apollo/server/errors';

export const responseError = (entity = 'record', errorMessage: string) => {
    if (errorMessage.includes("duplicate key value violates unique constraint"))
        throw new GraphQLError(`${entity} already exists`, {
            extensions: {
                code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
        });

};