require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const env = require("./env");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const FirebaseAPI = require("./datasources/firebase");

const firebaseConfig = {
  FIREBASE_API_KEY: env.FIREBASE_API_KEY,
  FIREBASE_DATABASE_URL: env.FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID: env.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: env.FIREBASE_APP_ID
};

const dataSources = () => ({
  firebaseAPI: new FirebaseAPI({ firebaseConfig })
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
