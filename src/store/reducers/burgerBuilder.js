import * as actionTypes from '../actions/actions';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    purchasable: true,
    error: false,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const updatePurchaseState=  ( ingredients ) => {
    const sum = Object.keys( ingredients )
        .map( igKey => {
            return ingredients[igKey];
        } )
        .reduce( ( sum, el ) => {
            return sum + el;
        }, 0 );
    console.log(sum);
    return sum>0;
}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            const newIngredientsAdd= {
                ...state.ingredients,
                [action.ingredientName] : state.ingredients[action.ingredientName]+1,
            }
            return {
                ...state,
                ingredients: newIngredientsAdd,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                purchasable: updatePurchaseState(newIngredientsAdd)
            };
        case actionTypes.REMOVE_INGREDIENT:
            const newIngredientsRm= {
                ...state.ingredients,
                [action.ingredientName] : state.ingredients[action.ingredientName]-1,
            }
            return {
                ...state,
                ingredients: newIngredientsRm,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                purchasable: updatePurchaseState(newIngredientsRm),
            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    meat: action.ingredients.meat,
                    cheese: action.ingredients.cheese,
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                },
                error: false,
                
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
};

export default reducer;