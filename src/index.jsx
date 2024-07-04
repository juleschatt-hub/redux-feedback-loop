import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';


// REDUX IMPORTS
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//FEEDBACK REDUCER
const feedback = (state = [], action) => {

    if(action.type === 'SET_FEEDBACK') {
        return action.payload;
        }

    return state;
} //END FEEDBACK REDUCER

//STORE
const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
); //END STORE

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
