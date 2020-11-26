import React,{useState} from 'react';
import Layout from '../../UiLayout/Layout/Layout'
import {Form,Button,Row,Col,Card} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {SignUp} from '../../Action/Auth.action'
const Register=()=>{
    const dispatch= useDispatch();
    const [user,setUser]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        errors:{
            firstname_error:'',
            lastname_error:'',
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
        if(user.firstname ===''){
            formValid=false;
            hasErrors.firstname_error="Full Name is required";
            
        }else{
            hasErrors.firstname_error="";
            
        }

        setUser({
            ...user,
            errors:hasErrors
        })

        if(formValid){
            console.log(user);
            dispatch(SignUp(user))
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
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      First Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="firstname" value={user.firstname} onChange={handleChange} placeholder="Full Name" />
    <Form.Text className="text-danger">
        {user.errors.firstname_error}
    </Form.Text>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Last Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="lastname" value={user.lastname} onChange={handleChange} placeholder="Full Name" />
    <Form.Text className="text-danger">
        {user.errors.lastname_error}
    </Form.Text>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <Form.Text className="text-danger">
        {user.errors.email_error}
    </Form.Text>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
      <Form.Text className="text-danger">
        {user.errors.password_error}
    </Form.Text>
    </Col>
  </Form.Group>
  
  

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button variant="success"  type="submit">Register</Button>
    </Col>
  </Form.Group>
</Form>
</Card>
</div>
        </Layout>
       
        </>
    )

}

export default Register;