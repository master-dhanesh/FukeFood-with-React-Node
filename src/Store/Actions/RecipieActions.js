import {
    // REMOVE_RECIPE, 
    ACTIVE_RECIPE, 
    // CREATE_RECIPE, 
    REMOVE_ACTIVE_RECIPE, 
    // MODIFY_RECIPE,
    GET_RECIPIES
} from '../ActionTypes';

import axios from '../../utils/axios';


export const GetRecipies = () => dispatch => {
    axios.post('/recipe/read')
    .then( response => {
        return dispatch({
            type: GET_RECIPIES,
            payload: response.data.recipies
        })
    }).catch(err => console.log(err));
}

export const CreateRecipe = (recipe) => dispatch => {
    axios.post('/recipe/create', {...recipe})
    .then( response => {
        dispatch(GetRecipies());
    }).catch(err => console.log(err));
    // return {
    //     type: CREATE_RECIPE,
    //     payload: recipe
    // }      
}

export const ModifyRecipe = (modifiedrecipe) => dispatch => {
    let id = modifiedrecipe._id;
    delete modifiedrecipe._id;
    delete modifiedrecipe.createdAt;
    delete modifiedrecipe.updatedAt;
    delete modifiedrecipe.__v;
    axios.patch(`/recipe/update/${id}`, {...modifiedrecipe})
    .then( response => {
        dispatch(GetRecipies());
    }).catch(err => console.log(err.response));
    // return {
    //     type: MODIFY_RECIPE,
    //     payload: modifiedrecipe
    // }      
}

export const DeleteRecipe = (id) => dispatch => {
    axios.delete(`/recipe/delete/${id}`)
    .then( response => {
        dispatch(GetRecipies());
    }).catch(err => console.log(err.response));
    // return {
    //     type: REMOVE_RECIPE,
    //     payload: id
    // }      
}


export const GetActiveRecipie = (id) => {
    return {
        type: ACTIVE_RECIPE,
        payload: id
    }      
}

export const RemoveActiveRecipie = () => {
    return {
        type: REMOVE_ACTIVE_RECIPE
    }      
}