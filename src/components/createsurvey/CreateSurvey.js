import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CreateSurveyMetaInfo from './CreateSurveyMetaInfo';

const useStyles = makeStyles((theme) => ({
  root: {},
  stepsInformation: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  createButton: {
    marginTop: theme.spacing(4),
  },
}));

const CreateSurvey = () => {
  const classes = useStyles();

  return (
    <Grid container direction={"column"} className={classes.root}>

      <Grid item>
        <Typography align={'center'} className={classes.stepsInformation}>
          Schritt 1 von 2
        </Typography>
      </Grid>

      <Grid item>
        <CreateSurveyMetaInfo/>
      </Grid>

      <Grid item container
            direction={"row"}
            justify={"flex-end"}
            alignItems={"flex-end"}
            className={classes.createButton}>
        <Button variant="contained" color="primary">Erstellen</Button>
      </Grid>

    </Grid>
  );
}

export default CreateSurvey;