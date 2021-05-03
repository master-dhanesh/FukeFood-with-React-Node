import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import More from '@material-ui/icons/More';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "0 1rem 1rem 0"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
      marginLeft: 'auto'
  }
}));

function CardRecipe(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={<Avatar aria-label="recipe" className={classes.avatar}>
        {'nikhil'.substr(0,1).toUpperCase()}</Avatar>}
        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
        title={'Mint Mojito'}
        subheader={`August 19, 2020 11:49:09 AM`}
      />
      <CardMedia className={classes.media} image={'https://data.thefeedfeed.com/recommended/post_3966940.jpeg'} title={'Mint Mojito'} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{'The Mint Mojito is so relaxing while people are stressed out, it provides positive vive while having.'}</Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button
        onClick={ () => props.history.push('/recipeinfo') }
        color="secondary"
        className={classes.button}
        startIcon={<More />}
      >Recipe Detail</Button>
      </CardActions>
     <Button></Button>
    </Card>
  );
}

export default CardRecipe;