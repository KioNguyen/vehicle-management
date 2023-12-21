import { readFileSync } from "fs";
import { vehicles } from "./query/vehicle";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addVehicle, updateVehicle } from "./mutation/vehicle";

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const resolvers = {
    Query: {
        vehicles,
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