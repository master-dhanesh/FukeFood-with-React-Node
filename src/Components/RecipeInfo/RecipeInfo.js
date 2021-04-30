import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Paper, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import AddRecipe from '../AddRecipe/AddRecipe';

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
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "50%",
  },
  buttons: {
    marginTop: "2rem",
    textAlign: "right",
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  ingredients: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "rgba(245, 0, 87, .05)"

  },
  ingButtons: {
      marginTop: "1rem",
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  addrecipe: {
      padding: "1rem",
      height: "100%",
      display: "flex",
      flexDirection: 'column',
      alignItems: "center"
  }, 
  linkstyle: {
    textDecoration: 'none',
    color: '#fff'
  }
}));

function RecipeInfo(props) {
  const classes = useStyles();

  const ActiveRecipe = {date: 'August 19, 2020 11:49:09 AM', dish: 'Mint Mojito', chef: 'nikhil', ingredientsArray:['mint', 'water', 'mojito paste', 'pudina leaf'], description: 'The Mint Mojito is so relaxing while people are stressed out, it provides positive vive while having.', image: 'https://data.thefeedfeed.com/recommended/post_3966940.jpeg'};

  const { date, dish, chef, description, image, ingredientsArray } = ActiveRecipe;
  
  const random = () => Math.floor(Math.random()*3);
  const badgeColor = [ 'primary', 'secondary', 'default'];
  const badgeVarient = [ 'outlined', 'contained', 'text'];
  const ingredientBadges = ingredientsArray.map( ingredient => (
    <Button key={ingredient} variant={badgeVarient[random()]} color={badgeColor[random()]}>{ingredient}</Button>
  ) );


  return (
    <Paper elevation={3} className={classes.root}>
    <CardMedia
        className={classes.cover}
        image={image}
        title={dish}
      />
      <div className={classes.details}>
       
        
      <CardContent className={classes.content}>
      <Typography component="h3" variant="h3">{dish}</Typography>
      <Typography variant="subtitle1" color="textSecondary">{chef}</Typography>
      <Typography variant="subtitle2" color="textSecondary">{date}</Typography>
      <br />
      <Typography variant="body1" color="textSecondary">{description}</Typography>

      <Paper elevation={3} className={classes.ingredients}>
      <Typography component="h4" variant="h4"> 
        <span role="img" aria-label="ingredient" aria-labelledby="jsx-a11y/accessible-emoji">🍝</span>
        Ingredients
        <div className={classes.ingButtons}>{ingredientBadges}</div>        
      </Typography>

      </Paper>

    <div className={classes.buttons}>
    <Button variant="contained" color="primary">      
    Edit
    </Button>
    <Button variant="contained" color="secondary">Delete</Button>
    <Button 
    variant="contained">Back</Button>
    </div>
    </CardContent>
        
    <AddRecipe />

      
        </div>
    </Paper>
  );
}

export default RecipeInfo;
