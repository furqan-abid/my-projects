import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {productDetailReducer, productReducer} from './productsReducer';

export const configureStore=()=>{
    const store=createStore(
        combineReducers({
            products: productReducer,
            productDetails:productDetailReducer
        }),
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store;
}
