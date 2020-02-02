import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Form from "../../components/Form";
import { LayoutSmall } from "../../components/Layout";

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default function Login() {
  const [credentials, setCredentials] = useState({});
  const [login, { data }] = useMutation(LOGIN);
  const client = useApolloClient();

  if (
    data &&
    data.login !==
      "The password is invalid or the user does not have a password." &&
    data.login !==
      "Too many unsuccessful login attempts. Please try again later."
  )
    return <Redirect to="/dashboard" />;

  return (
    <LayoutSmall>
      <Form
        onSubmit={(e: any) => {
          e.preventDefault();
          if (credentials)
            login({ variables: credentials }).catch(err => {
              client.writeData({ data: { errors: err } });
              alert(err);
            });
        }}
      >
        <h1>🏕</h1>
        <Input
          onChange={(e: any) =>
            setCredentials({
              ...credentials,
              email: e.currentTarget.value
            })
          }
          name="Email"
          placeholder="Enter Your Email"
          type="email"
          required
        />
        <Input
          onChange={(e: any) =>
            setCredentials({
              ...credentials,
              password: e.currentTarget.value
            })
          }
          name="Password"
          placeholder="Enter Your Password"
          type="password"
          required
        />
        <Button>Sign In</Button>
        <Link to="/forgot">Forgot password?</Link>
        <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
      </Form>
    </LayoutSmall>
  );
}
