import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { TrackAPI, resolvers, typeDefs } from "./graphql/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context() {
    const { cache } = server;
    return {
      dataSources: {
        trackAPI: new TrackAPI({ cache }),
      },
    };
  },
});

console.info(`🚀  Server ready at ${url}`);
