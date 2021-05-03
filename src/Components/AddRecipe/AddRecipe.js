import React, { useState } from 'react';
import {TextField, Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginBottom: "2rem"
    },
    textfields: {
        width: "100%",
        marginBottom: "1rem"
    },
    buttonSpace: {
        marginLeft: "1rem"
    }
  }));

function AddRecipe(props) {
    const classes = useStyles();
    const initialState = {
        dish: '',
        chef: '',
        image: '',
        description: '',
        date: '',
        ingredients: ''
    }

    const [state, setstate] = useState(initialState);

    const ChangeHandler = (e) => {
        e.persist();
        setstate(prevstate => ({...prevstate, [e.target.name]: e.target.value}));
    }

    const SubmitRecipeHandler = (e) => {
        e.preventDefault();

        setstate(prevstate => ({...prevstate, date: new Date()}));

        console.log(state);
    }

    return (
        <Grid container className={classes.root}>
        <Grid item sm={2}></Grid>
        <Grid container item sm={8}>
        
        <form onSubmit={SubmitRecipeHandler}>

        <TextField
                className={classes.textfields}
                color="secondary"
                label="Recipe Name" 
                variant="outlined" 
                name='dish'
                onChange={ChangeHandler}
                value={state.dish}
            />
            <TextField
                className={classes.textfields}
                color="secondary"
                label="Chef Name" 
                variant="outlined" 
                name='chef'
                onChange={ChangeHandler}
                value={state.chef}
            />
            <TextField
                className={classes.textfields}
                color="secondary"
                label="Recipe Ingredients" 
                variant="outlined" 
                name='ingredients'
                onChange={ChangeHandler}
                value={state.ingredients}
            />
            <TextField
                className={classes.textfields}
                color="secondary"
                label="Recipe Image URL" 
                type="url"
                variant="outlined" 
                name='image'
                onChange={ChangeHandler}
                value={state.image}
            />
            <TextField
                className={classes.textfields}
                color="secondary"
                label="Recipe Descripton" 
                variant="outlined" 
                name='description'
                onChange={ChangeHandler}
                value={state.description}
            />
            <Button 
                type="submit"
                variant="contained" 
                color="secondary">Save Recipe</Button>
            <Button 
                onClick={ () => props.history.goBack() }
                className={classes.buttonSpace} 
                variant="contained" 
                color="primary">Back</Button>

        </form>
            
        </Grid>
        <Grid item sm={2}></Grid>
       
        </Grid>
    )
}

export default AddRecipe;
