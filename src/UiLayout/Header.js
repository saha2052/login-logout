import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {LogOut} from '../Action/Auth.action'
const Header=()=>{
    // const dispatch= useDispatch();
    // const auth = useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
  // console.log(auth);
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand as={Link} to={'/home'}>Company</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    {/* {!auth.authenticated ? (

    <Nav>
      <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
      <Nav.Link as={Link}  to={'/register'}>
        Register
      </Nav.Link>
    </Nav>
    ):(
      <Nav.Link as={Link} to={'javascript:void(0)'} onClick={()=>{
          dispatch(LogOut());
      }}>Logout</Nav.Link>

    )

    } */}

{
     !auth.authenticated ? 
    <Nav>
      <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
      <Nav.Link  to={'/register'} as={Link}>
       Sign Up
      </Nav.Link>
    </Nav>:null
}
{
              auth.authenticated ?
              <Nav>
              <Nav.Link as={Link} to={'#'} onClick={() => {
                  dispatch(LogOut())
                }}>Log Out</Nav.Link>
              </Nav>:null
            }
  </Navbar.Collapse>
</Navbar>
       
        </>
    )

}

export default Header;