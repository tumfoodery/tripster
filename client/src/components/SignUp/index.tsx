import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Input from "../Input";
import Form from "../Form";
import Button from "../Button";

const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    )
  }
`;

export default function SignUp() {
  const [credentials, setCredentials] = useState({});
  const [signup, { data }] = useMutation(SIGNUP);

  if (data) return <Redirect to="/" />;

  return (
    <Form
      onSubmit={(e: any) => {
        e.preventDefault();
        if (credentials) signup({ variables: credentials });
      }}
    >
      <h1>🏕</h1>
      <Input
        onChange={(e: any) =>
          setCredentials({
            ...credentials,
            firstName: e.currentTarget.value
          })
        }
        placeholder="first name"
        required
      />
      <Input
        onChange={(e: any) =>
          setCredentials({
            ...credentials,
            lastName: e.currentTarget.value
          })
        }
        placeholder="last name"
        required
      />
      <Input
        onChange={(e: any) =>
          setCredentials({
            ...credentials,
            email: e.currentTarget.value
          })
        }
        placeholder="email"
        required
      />
      <Input
        onChange={(e: any) =>
          setCredentials({
            ...credentials,
            password: e.currentTarget.value
          })
        }
        placeholder="password"
        type="password"
        required
      />
      <Button type="submit">Sign Up</Button>
      <Link to="login">Already have an account? Sign in</Link>
    </Form>
  );
}
