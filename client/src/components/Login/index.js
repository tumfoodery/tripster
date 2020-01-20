import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Grid, Typography, Container, Snackbar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './useStyles';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default function Login() {
  const classes = useStyles();
  const [credentials, setCredentials] = useState(null);
  const [login, { data }] = useMutation(LOGIN);

  if (data &&
        data.login !== 'The password is invalid or the user does not have a password.'
          && data.login !== 'Too many unsuccessful login attempts. Please try again later.') return <Redirect to='/dashboard' />;

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar open={data && data.login} duration={5000} message={data && data.login}/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={e => {
          e.preventDefault();
          if (credentials) login({ variables: credentials });
        }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onInput={ e => setCredentials({...credentials, email: e.target.value})}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onInput={ e => setCredentials({...credentials, password: e.target.value})}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}