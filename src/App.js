import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Component/Home/Home'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login';
import Protected from './Component/Protected/Protected'
import {Route,BrowserRouter as Router,Redirect} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import {isLoggedInUser} from './Action/Auth.action';
import ProductList from './Component/Products/ProductList/ProductList'
import ProductDetails from './Component/Products/ProductDetails/ProductDetails';
function App() {
  const dispatch= useDispatch();
  const auth = useSelector(state => state.auth);
  //const dispatch = useDispatch()

useEffect(() => {
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  }, [dispatch,auth.authenticated]);
    // const auth = useSelector(state=>{
    //     state.auth
    // })
    // console.log(auth);

    // useEffect(()=>{
    //   if(!auth.authenticated){
    //     dispatch(isLoggedInUser())
    //   }
    // }) 
  return (
    <div className="App">
     <Router>
       
       <Protected exact path="/home" component={Home}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/register" component={Register}/>
       <Route  path="/products" component={ProductList}/>
       <Route  path="/productdetails/:id" component={ProductDetails}/>
       <Route exact path="/"  ><Redirect to="/home"/></Route>
     </Router>
    </div>
  );
}

export default App;
