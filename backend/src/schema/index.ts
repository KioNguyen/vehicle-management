import { readFileSync } from "fs";
import { vechicles } from "./query/vechicle";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addVechicle } from "./mutation/vechicle";

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const resolvers = {
    Query: {
        vechicles,
    },
    Mutation: {
        addVechicle,
    }
};

const schema = makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers: {
        ...resolvers,
    },
});

export { schema };