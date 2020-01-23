const resolvers = {
  Query: {
    currentUser: (_, __, { dataSources: { firebaseAPI }, user }) => {
      if (!user) {
        return null;
      }
      return firebaseAPI.getCurrentUser();
    },
    isLoggedIn: (_, __, { dataSources: { firebaseAPI }, user }) => {
      if (!user) {
        return false;
      }
      return firebaseAPI.isLoggedIn();
    },
    sendEmailVerification: async (_, __, { dataSources: { firebaseAPI } }) =>
      await firebaseAPI.sendEmailVerification(),
    sendPasswordResetEmail: async (
      _,
      { email },
      { dataSources: { firebaseAPI } }
    ) => firebaseAPI.sendPasswordResetEmail(email)
  },
  Mutation: {
    deleteUser: async (_, __, { dataSources: { firebaseAPI }, user }) => {
      if (!user) {
        return null;
      }
      return await firebaseAPI.deleteUser();
    },
    login: async (_, args, { dataSources: { firebaseAPI } }) => {
      return await firebaseAPI.login(args);
    },
    logout: async (_, __, { dataSources: { firebaseAPI } }) =>
      await firebaseAPI.logout(),
    signup: async (_, args, { dataSources: { firebaseAPI } }) =>
      await firebaseAPI.signup(args),
    verifyEmail: async (_, { code }, { dataSources: { firebaseAPI } }) =>
      firebaseAPI.verifyEmail(code)
  }
};

module.exports = resolvers;
