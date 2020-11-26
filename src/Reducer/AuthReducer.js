import {ActionConstant} from '../Action/ActionConstant';

const initState={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    authenticated:false,
    authentiating:'',
    error:null,
    message:''
}

const AuthReducer=(state=initState,action)=>{
    console.log(action);
    switch(action.type){
        // `${ActionConstant.USER_REGISTER}_REQUEST`
        case null:
            state={
                ...state
            }
            return state;
            break;
        case `${ActionConstant.USER_REGISTER}_SUCCESS`:
            state={
                ...state,
                message:action.payload.message
            }
            return state;
            break;
        case `${ActionConstant.USER_LOGIN}_SUCCESS`:
            state={
                ...state,
                authenticated:true,
                message:action.payload.message
            }
            return state;
            break;
        case `${ActionConstant.USER_LOGOUT}_SUCCESS`:
            state={
                ...state,
                authenticated:false,
                message:action.payload.message

                
            }
            return state;
            break;
        case `${ActionConstant.USER_REGISTER}_FAILURE`:
            state={
                ...state,
                error:action.payload.error
            }
            return state;
            break;
        case `${ActionConstant.USER_LOGIN}_FAILURE`:
            state={
                ...state,
                authenticated:false,
                error:action.payload.error
            }
            return state;
            break;
            default:
                return state;
    }
    //console.log(state);
    return state;
}

export default AuthReducer;