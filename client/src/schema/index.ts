import { gql } from "apollo-boost";

export const typeDefs = gql`
  # extend type User {}
  type Notification {
    text: String!
  }
`;
