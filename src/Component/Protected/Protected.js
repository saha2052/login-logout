import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const Protected = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} component={(props) => {
        const user = localStorage.getItem('token')
         // ? JSON.parse(localStorage.getItem('user')) : null;

        if(user){
            return <Component {...props} />
        }else{
            return <Redirect to={`/login`} />
        }

    }} />
   )

 }

export default Protected;