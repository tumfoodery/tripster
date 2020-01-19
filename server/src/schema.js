const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    root: String
  }

  type Mutation {
    # login(email: String): String # login token
    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      optIn: Boolean!
    ): String
  }
`;

module.exports = typeDefs;
