import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import ProductReducer from './ProductReducer'
const RootReducer=combineReducers(
   { auth:AuthReducer,
      products:ProductReducer
   }
)

export default RootReducer;


