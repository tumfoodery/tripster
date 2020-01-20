import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Hello, Michael! Welcome back 💃</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Trip 1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Trip 2</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Trip 3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Trip 4</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Trip 5</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Trip 6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Trip 7</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
