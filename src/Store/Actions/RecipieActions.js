import {ACTIVE_RECIPE, REMOVE_ACTIVE_RECIPE } from '../ActionTypes';

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