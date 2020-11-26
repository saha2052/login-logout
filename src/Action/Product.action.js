import {ProductConstant} from './ActionConstant';
import axios from 'axios';

export const ProdDtl=()=>{
    return async(dispatch)=>{
      dispatch({type:`${ProductConstant.PRODUCT_GETDTL}_REQUEST`});
      axios.get(`https://fakestoreapi.com/products`).
      then((res)=>{
          console.log(res);
          const msg='Get all products'
        dispatch({type:`${ProductConstant.PRODUCT_GETDTL}_SUCCESS`,payload:{message:msg,products:res.data}})
    }).catch((error)=>{
        
        dispatch({type:`${ProductConstant.PRODUCT_GETDTL}_FAILURE`,payload:{error:'Data not Coming'}})
      }) 
    }
    }