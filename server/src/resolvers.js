const resolvers = {
  Query: {
    currentUser: (_, __, { dataSources: { firebaseAPI }, user }) => {
      if (!user) {
        return null;
      }
      return firebaseAPI.getCurrentUser();
    },
    isLoggedIn: (_, __, { dataSources: { firebaseAPI }, user }) => {
      if (user) {
        return true;
      }
      firebaseAPI.isLoggedIn();
    },
    sendEmailVerification: async (_, __, { dataSources: { firebaseAPI } }) =>
      await firebaseAPI.sendEmailVerification(),
    sendPasswordResetEmail: async (
      _,
      { email },
      { dataSources: { firebaseAPI } }
    ) => {
      // check user on context
      return firebaseAPI.sendPasswordResetEmail(email);
    }
  },
  Mutation: {
    deleteUser: async (_, __, { dataSources: { firebaseAPI } }) =>
      // just use user from context?
      await firebaseAPI.deleteUser(),
    login: async (_, args, { dataSources: { firebaseAPI }, user }) => {
      if (user) {
        return await user.getIdToken();
      }
      return await firebaseAPI.login(args);
    },
    logout: async (_, __, { dataSources: { firebaseAPI } }) =>
      // Probably destroy token?
      await firebaseAPI.logout(),
    signup: async (_, args, { dataSources: { firebaseAPI }, user }) => {
      if (user) {
        return null;
      }
      return await firebaseAPI.signup(args);
    },
    verifyEmail: async (_, { code }, { dataSources: { firebaseAPI } }) =>
      firebaseAPI.verifyEmail(code)
  }
};

module.exports = resolvers;
