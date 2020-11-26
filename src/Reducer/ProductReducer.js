import {ProductConstant} from '../Action/ActionConstant';

const initState={
    products:[],
    error:null,
    message:''
}

const ProductReducer=(product=initState,action)=>{
    console.log(action);
    switch(action.type){
        // `${ActionConstant.USER_REGISTER}_REQUEST`
        case null:
            product={
                ...product
            }
            return product;
            
        case `${ProductConstant.PRODUCT_GETDTL}_SUCCESS`:
            product={
                ...product,
                products:action.payload.products
            }
            return product;
            
        case `${ProductConstant.PRODUCT_GETDTL}_FAILURE`:
            product={
                ...product,
                error:action.payload.error
               
            }
            return product;
            
        
        
            default:
                return product;
    }
   
    return product;
}

export default ProductReducer;