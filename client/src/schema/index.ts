import { gql } from "apollo-boost";

export const typeDefs = gql`
  mutation setNotification($text: String!) {
    notification(description: $text)
  }
`;
