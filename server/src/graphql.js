// require("dotenv").config();
// const { ApolloServer } = require("apollo-server-lambda");
// const typeDefs = require("./schema");
// const resolvers = require("./resolvers");
// const FirebaseAPI = require("./datasources/firebase");

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_PROJECT_ID,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

// const dataSources = () => ({
//   firebaseAPI: new FirebaseAPI({ firebaseConfig })
// });

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   dataSources,
//   playground: true,
//   introspection: true
// });

// // Start our server if we're not in a test env.
// // if we're in a test env, we'll manually start it in a test
// // if (process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== "test") {
// //   server
// //     .listen({ port: 4000 })
// //     .then(({ url }) => console.log(`🚀 app running at ${url}`));
// // }

// exports.handler = server.createHandler();
