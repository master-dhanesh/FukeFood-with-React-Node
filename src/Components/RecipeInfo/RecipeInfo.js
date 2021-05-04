import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {Paper, CardMedia } from '@material-ui/core';
import AddRecipe from '../AddRecipe/AddRecipe';
import RecipeDetail from './RecipeDetail/RecipeDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
    minHeight: '500px',
    marginBottom: "2rem"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "50%"
  },
  cover: {
    width: "50%",
  }
}));

function RecipeInfo(props) {
  const classes = useStyles();

  const ActiveRecipe = {date: 'August 19, 2020 11:49:09 AM', dish: 'Mint Mojito', chef: 'nikhil', ingredientsArray:['mint', 'water', 'mojito paste', 'pudina leaf'], description: 'The Mint Mojito is so relaxing while people are stressed out, it provides positive vive while having.', image: 'https://data.thefeedfeed.com/recommended/post_3966940.jpeg'};

  const { dish, image } = ActiveRecipe;
  
  return (
    <Paper elevation={3} className={classes.root}>
    <CardMedia
        className={classes.cover}
        image={image}
        title={dish}
      />
      <div className={classes.details}>
    
        <Switch>
            <Route exact path={`${props.match.url}/`} component={RecipeDetail} />
            <Route path={`${props.match.url}/edit`} component={AddRecipe} />
            <Redirect from={props.match.url} to={`${props.match.url}/info`} />
        </Switch>  

        </div>
    </Paper>
  );
}

export default RecipeInfo;
