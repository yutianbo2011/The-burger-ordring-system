import * as actionType from '../actions/actions';

const initialState= {
    orders: [],
    loading: false,
}

const reducer = (state=initialState, action ) => {
    switch(action.type){
        case actionType.PURCHASE_BURGER_SUCCESS:
            const newOrder={
                ...action.orderData,
                orderId: action.orderId,

            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
            };
        case actionType.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}