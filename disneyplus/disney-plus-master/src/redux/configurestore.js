import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Movies } from './movies';
import { Users } from './users';
export const configureStore=()=>{
    const store = createStore(
        combineReducers({
            movies: Movies,
            users: Users
        }),
        applyMiddleware(thunk, logger)
    )
    return store;
}