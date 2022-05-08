import { signOut } from "firebase/auth";
import React from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import ActiveRoute from "../ActiveRoute/ActiveRoute";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

 // console.log("user", user);

  const handleSingout = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="mb-4">
      <Container>
        <ActiveRoute className="nav-link" to="/">
          <img src="images/logo.png" alt="" />
         
        </ActiveRoute>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <ActiveRoute to='/' className="nav-link">Home</ActiveRoute>
            <ActiveRoute to='/blog' className="nav-link">Blog</ActiveRoute>
            <ActiveRoute to='/manage-inventory' className="nav-link">Manage Inventory</ActiveRoute>
          </Nav>
          <Nav>
            {user ? (
            
             <>
                <ActiveRoute className="nav-link" to="/add">
                  Add items
                </ActiveRoute>
            
                <ActiveRoute className="nav-link" to="/inventory">
                Manage Items
                </ActiveRoute>
            
                <ActiveRoute className="nav-link" to="/my-items">
                My items
                </ActiveRoute>
            
                </>
              
            ) : (
              ""
            )}

            {user ? (
              <Button onClick={handleSingout}>Sign Out</Button>
            ) : (
              <ActiveRoute className="nav-link" to="/login">
                LogIn
              </ActiveRoute>
            )}

            <ActiveRoute className="nav-link" to="/register">
              Register
            </ActiveRoute>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
