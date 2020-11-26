import {React,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {ProdDtl} from '../../../Action/Product.action'
import {Link,Route} from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails'
import Layout from '../../../UiLayout/Layout/Layout';
const ProductList=({match})=>{
    const dispatch = useDispatch();
    const product = useSelector(product => product.products);
   console.log(product);

   useEffect(() => {
    if(product){
      dispatch(ProdDtl())
    }
  }, [dispatch]);
    return(
        <>
        <Layout>

        <h1>Products</h1>
        <ul>
            {
                product.products.map(({title,id})=>(
                    <li key={id}>
                        <Link to={`productdetails/${id}`}>{title}</Link>
                    </li>
                ))
            }
        </ul>
        <Route  path={`${match.path}/:productId`} component={ProductDetails}/>
        </Layout>
       
        </>
    )

}

export default ProductList;