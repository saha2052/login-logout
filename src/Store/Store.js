import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../Reducer/IndexReducer'
const Store=createStore(RootReducer,applyMiddleware(thunk));

export default Store;