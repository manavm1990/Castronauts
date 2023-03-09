import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mocks, typeDefs } from "./graphql/index.js";

const server = new ApolloServer({
  typeDefs,
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
    mocks,
  }),
});

const { url } = await startStandaloneServer(server, {});

console.info(`🚀  Server ready at ${url}`);
