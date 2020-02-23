export const defaults = {
  notification: {}
};

export const resolvers = {
  Notification: {},
  Mutation: {
    setNotification(a: any, b: any, c: any) {
      console.log(a);
      console.log(b);
      console.log(c);
      return "Test";
    }
  }
};
