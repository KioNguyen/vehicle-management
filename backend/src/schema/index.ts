import { readFileSync } from "fs";
import { getVehicles } from "./query/vehicle";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addVehicle, updateVehicle } from "./mutation/vehicle";

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const resolvers = {
    Query: {
        getVehicles,
    },
    Mutation: {
        addVehicle,
        updateVehicle
    }
};

const schema = makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers: {
        ...resolvers,
    },
});

export { schema };