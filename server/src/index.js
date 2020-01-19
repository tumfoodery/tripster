require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const FirebaseAPI = require("./datasources/firebase");

const dataSources = () => ({
  firebaseAPI: new FirebaseAPI({
    firebaseConfig: JSON.parse(process.env.FIREBASE_CONFIG)
  })
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== "test") {
  server
    .listen({ port: 4000 })
    .then(({ url }) => console.log(`🚀 app running at ${url}`));
}
