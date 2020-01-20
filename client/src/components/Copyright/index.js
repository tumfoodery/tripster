import React from 'react';
import { Typography, Link } from '@material-ui/core';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" m={2}>
      {'Copyright © '}
      <Link color="inherit" href="https://tripster.vip">
        Tripster
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}