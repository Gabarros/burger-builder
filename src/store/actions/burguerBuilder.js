import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) =>{
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};
export const removeIngredient = (name) =>{
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const setIngredients = (ingredients) =>{
    return{
        type: actionTypes.SET_INGREDIENTS,
        ingredients

    }
};

export const fecthIngredientsFailer = () =>{
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILER
    };
}


export const initIngredients = () =>{
    return dispatch =>{
        axios.get('https://burger-builder-35e70.firebaseio.com/ingredients.json').then(response => {
           dispatch(setIngredients(response.data))
        }).catch(err=>{
            dispatch(fecthIngredientsFailer());
        })


    };
}
