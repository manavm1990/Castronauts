import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { TrackAPI, resolvers, typeDefs } from "./graphql/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: () => {
    return {
      dataSources: {
        trackAPI: new TrackAPI(),
      },
    };
  },
});

console.info(`🚀  Server ready at ${url}`);
