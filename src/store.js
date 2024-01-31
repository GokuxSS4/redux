import {createStore,combineReducers} from 'redux'; 
import todoReducer from './reducers/index';

const reduxDevTool =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = new createStore(combineReducers({todos:todoReducer}),{},reduxDevTool);

export default store;