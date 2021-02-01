import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import RegisterModal from './auth/RegisterModal'
import LoginModal from './auth/LoginModal'
import {logout} from '../js/actions/authActions'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
  Container,
} from 'reactstrap';


const AppNavbar = () => {

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth =useSelector((state)=>state.authReducer.isAuth)
  const user =useSelector((state)=>state.authReducer.user)

  const toggle = () => setIsOpen(!isOpen);

 const loginUser =()=>{dispatch(logout())}

  const authLinks = (
    <Fragment>
       <NavItem>
        { <Link to="/dashboard">
          <span className="navbar-text mr-3">
            <strong>{user?`welcome ${user.name}`:null}</strong>
          </span>
        </Link> }
      </NavItem>
     <NavLink href='#' onClick={loginUser} > 
         logout
     </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
   <NavItem>
      <RegisterModal/>    
        </NavItem>
      <NavItem>
      <LoginModal />  
         </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
  {isAuth?authLinks:guestLinks}
    
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
