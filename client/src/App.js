import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { GetRecipies } from './Store/Actions'

import { withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';
import CardRecipe from './Components/CardRecipe/CardRecipe';
import ListRecipe from './Components/ListRecipe/ListRecipe';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import RecipeInfo from './Components/RecipeInfo/RecipeInfo';
import Header from './Components/Header/Header';

class App extends Component {


  componentDidMount() {
    this.props.GetRecipies();
  }


  render() {

    let isGrid = 'row';
    if(this.props.location.pathname === '/listrecipe'){
      isGrid =  'column';
    }

    return (
      <>
        
        <Header />
     
        <Grid container>
          <Grid item sm={1}></Grid>
          <Grid 
            direction={isGrid} 
            container item sm={10}>

              <Switch>
                <Route path="/cardrecipe" component={CardRecipe} />
                <Route path="/listrecipe" component={ListRecipe} />
                <Route path="/addrecipe" component={AddRecipe} />
                <Route path="/recipeinfo/:id" component={RecipeInfo} />
                <Redirect from="/" to="/cardrecipe" />
              </Switch>

          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>

        <Typography align="center" className="footer">Made with <span>❤</span> in Sheryians.</Typography>
      </>
    );
  }
}

const mapDispatchToProps = ({
  GetRecipies
})

export default connect(null, mapDispatchToProps)(withRouter(App));