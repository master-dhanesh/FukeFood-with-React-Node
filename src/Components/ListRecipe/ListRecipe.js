import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      padding: "10px 1.5rem"
    },
    imageSpace: {
      marginRight: '1rem'
    }
  }));

function ListRecipe(props) {
    const classes = useStyles();
    return (
      <div>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        title={'The Mint Mojito is so relaxing while people are stressed out, it provides positive vive while having.'}
        >
        <img className={classes.imageSpace} height={50} src={'https://data.thefeedfeed.com/recommended/post_3966940.jpeg'} alt={'Mint Mojito'} />
        {'Mint Mojito'}
        </Button>
        </div>
    )
}

export default ListRecipe;
