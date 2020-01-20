import React, { useState } from 'react';
import { Avatar, Button, TextField, Typography, Container, Grid } from '@material-ui/core';
import { Link, Redirect } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './useStyles';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const SIGNUP = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password)
  }
`;

export default function SignUp() {
  const classes = useStyles();
  const [credentials, setCredentials] = useState(null);
  const [signup, { data }] = useMutation(SIGNUP);

  if (data) return <Redirect to='/' />;

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={e => {
          e.preventDefault()
          if (credentials) signup({ variables: credentials });
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onInput={ e => setCredentials({...credentials, email: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onInput={ e => setCredentials({...credentials, password: e.target.value})}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}