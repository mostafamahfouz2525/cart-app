import {createStore,applayMiddleware} from 'redux';
import thunk from 'react-redux';
const initialState = {};

export default createStore(rootReducer,initialState,applayMiddleware(thunk))