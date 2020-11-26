import React,{useState} from 'react';
import Layout from '../../UiLayout/Layout/Layout'
import {Form,Button,Card} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {SignIn} from '../../Action/Auth.action';
import {useHistory,Redirect} from 'react-router-dom';

const Login=()=>{
    const history=useHistory();

    const dispatch= useDispatch();
    
    const [user,setUser]=useState({
        email:'',
        password:'',
        errors:{
            email_error:'',
            password_error:''
            
        }
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const pattern =new RegExp(/^([a-zA-Z0-9.-]+)@([a-zA-Z]{3,12}).([a-zA-Z.]{2,20})$/);
        let formValid=true;
        const hasErrors={...user.errors}
        if(user.email===''){
            formValid=false
            hasErrors.email_error="Email is Required";
        }else if(user.email !== '' && !pattern.test(user.email)){
            formValid=false
            hasErrors.email_error="Email is Pattern is not matched";
            
        }else{
            hasErrors.email_error="";

        }

        if(user.password ===''){
            formValid=false;
            hasErrors.password_error="Password is required";
            
        }else{
            hasErrors.password_error="";
            
        }

        setUser({
            ...user,
            errors:hasErrors
        })

        if(formValid){
            console.log(user);
            dispatch(SignIn(user));
            history.push('/products');

            
        }else{
            
            return false;
        }
        
    }

    const handleChange=(e)=>{
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
   
    return(
        <>
        <Layout>

        <div className="crd">
        <Card bg="light" text="blue" style={{ width: '38rem' }}>
        <Form onSubmit={handleSubmit}>
        <Form.Group >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter email" />
            <Form.Text className="text-danger">
            {user.errors.email_error}
            </Form.Text>
        </Form.Group>

        <Form.Group >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
            <Form.Text className="text-danger">
            {user.errors.password_error}
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Card>
        </div>
        </Layout>
        </>
    )

}

export default Login;