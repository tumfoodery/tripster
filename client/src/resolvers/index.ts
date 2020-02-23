export const defaults = {
  notifications: {}
};

export const resolvers = {
  Notifications: {},
  Mutation: {
    SetNotification(_root: any, notification: any, { cache }: any) {
      cache.writeData({ notification });
      return;
    }
  }
};
