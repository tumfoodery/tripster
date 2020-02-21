export const defaults = {
  user: null,
  trips: [],
  locations: [],
  notification: {
    description: ""
  }
};

export const resolvers = {
  Notification: {
    description() {
      return "";
    }
  }
  // Mutation: {
  //   updateNotification: (_, { text }: { text: string }, { cache }):  => {
  //     const queryResult = cache.readQuery<GetCartItemTypes.GetCartItems>({ query: GET_CART_ITEMS });
  //     if (queryResult) {
  //       const { cartItems } = queryResult;
  //       const data = {
  //         cartItems: cartItems.includes(id)
  //           ? cartItems.filter((i) => i !== id)
  //           : [...cartItems, id],
  //       };
  //       cache.writeQuery({ query: GET_CART_ITEMS, data });
  //       return data.cartItems;
  //     }
  //     return [];
  //   },
  // },
};
