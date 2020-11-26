import {React} from 'react';
import {useSelector} from 'react-redux';

import Layout from '../../../UiLayout/Layout/Layout';

const ProductDetails=(props)=>{

    
    const product = useSelector(product => product.products);
   



  console.log('hello');
  const prod=product.products.find(({id})=>id==props.match.params.id)
   
console.log(prod);

    return(
        <>
        <Layout>

         <p>This is ProductDetails</p>
         <p>Title : {prod.title}</p>
         <p>Price : {prod.price}</p>
         <p>Description : {prod.description}</p>
        
         </Layout>
        </>
    )

}

export default ProductDetails