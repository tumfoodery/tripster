const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    root: String
  }

  type Mutation {
    # login(email: String): String # login token
    signup(email: String!, password: String!): String
  }
`;

module.exports = typeDefs;
