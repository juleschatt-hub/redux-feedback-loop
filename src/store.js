
//REDUX IMPORTS
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


//FEEDBACK REDUCER
const feedback = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''

}, action) => {

    if(action.type === 'SET_FEELING') {
        return {
            ...state,
            feeling: action.payload
        } 
        }
    if(action.type === 'SET_UNDERSTANDING') {
        return {
            ...state,
            understanding: action.payload
        } 
        }
    if(action.type === 'SET_SUPPORT') {
        return {
            ...state,
            support: action.payload
        } 
        }
    if(action.type === 'SET_COMMENTS') {
        return {
            ...state,
            comments: action.payload
        } 
        }
    if(action.type === 'CLEAR_FEEDBACk') {
        return state
    }
    return state
} //END FEEDBACK REDUCER

//STORE
export const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
); //END STORE

