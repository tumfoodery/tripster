const resolvers = {
  Query: {
    isLoggedIn: (_, __, { dataSources: { firebaseAPI } }) =>
      firebaseAPI.isLoggedIn()
  },
  Mutation: {
    login: async (_, args, { dataSources: { firebaseAPI } }) =>
      await firebaseAPI.login(args),
    logout: async (_, __, { dataSources: { firebaseAPI } }) =>
      await firebaseAPI.logout(),
    signup: async (_, args, { dataSources: { firebaseAPI } }) =>
      await firebaseAPI.signup(args)
  }
};

module.exports = resolvers;
