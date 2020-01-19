const resolvers = {
  Mutation: {
    // login: async (_, { email }, { dataSources }) => {},
    signup: async (_, args, { dataSources }) => {
      const uid = await dataSources.firebaseAPI.signup(args);
      return uid;
    }
  }
};

module.exports = resolvers;
