import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    email: String!
    emailVerified: Boolean!
    firstName: String!
    lastName: String!
  }
`;
