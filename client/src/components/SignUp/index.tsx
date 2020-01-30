import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Input from "../Input";
import Form from "../Form";
import { noop } from "../../utils/fn";

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
  const [
    credentials
    // setCredentials
  ] = useState({});
  const [signup, { data }] = useMutation(SIGNUP);

  if (data) return <Redirect to="/" />;

  return (
    <Form
      onSubmit={(e: any) => {
        e.preventDefault();
        debugger;
        if (credentials) signup({ variables: credentials });
      }}
    >
      <Input onChange={noop} placeholder="first name" />
      <Input onChange={noop} placeholder="last name" />
      <Input onChange={noop} placeholder="email" />
      <Input onChange={noop} placeholder="password" />
      <button type="submit">Sign Up</button>
      <Link to="login">Already have an account? Sign in</Link>
    </Form>
  );
}
