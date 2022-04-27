import {ActionTypes} from '../contents/action-types.js'

const initialState = {
    products: [{
        id: 1,
        title: 'Product 1',
    }],
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
            
        default:
            return state;
    }
}