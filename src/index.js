import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import TrackAPI from "./datasources/track-api";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});
const run = async () => {
  const { url, port } = await server.listen({
    port: process.env.PORT || 4000,
  });

  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📬  Query at ${url}
    `);
};

run();
