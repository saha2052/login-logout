import {ActionConstant} from './ActionConstant';
import axios from 'axios';

export const SignUp=(user)=>{
return async(dispatch)=>{
  dispatch({type:`${ActionConstant.USER_REGISTER}_REQUEST`});
  axios.post(`https://api09.herokuapp.com/register`,user).
  then((res)=>{
      console.log(res);
      const msg=res.data.message
    dispatch({type:`${ActionConstant.USER_REGISTER}_SUCCESS`,payload:{message:msg}})
}).catch((error)=>{
    
    dispatch({type:`${ActionConstant.USER_REGISTER}_FAILURE`,payload:{error:'Data not register'}})
  }) 
}
}


export const SignIn=(user)=>{
return async(dispatch)=>{
  dispatch({type:`${ActionConstant.USER_LOGIN}_REQUEST`});
  axios.post(`https://api09.herokuapp.com/login`,user).
  then((res)=>{
      console.log(res);
      const msg=res.data.message;
      window.localStorage.setItem('token',res.data.token);
    dispatch({type:`${ActionConstant.USER_LOGIN}_SUCCESS`,payload:{message:msg}})
}).catch((error)=>{
    
    dispatch({type:`${ActionConstant.USER_LOGIN}_FAILURE`,payload:{error:'Failed Login'}})
  }) 
}
}

export const isLoggedInUser = () => {
    return async dispatch => {

        const user = localStorage.getItem('token') ;
        // ? JSON.parse(localStorage.getItem('user')) : null;

        if(user){
            dispatch({
                type: `${ActionConstant.USER_LOGIN}_SUCCESS`,
                payload: { user }
            });
        }else{
            dispatch({
                type: `${ActionConstant.USER_LOGIN}_FAILURE`,
                payload: { error: 'Login again please' }
            });
        }


    }
}

export const LogOut = () => {
    return async dispatch => {
        // dispatch({ type: `${ActionConstant.USER_LOGOUT}_REQUEST` });
        //Now lets logout user

        window.localStorage.clear()
 dispatch({type: `${ActionConstant.USER_LOGOUT}_SUCCESS`,payload:{message:'LOGOUT SUCCESS'}});
      
        }
}