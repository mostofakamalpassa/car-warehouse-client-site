import { signOut } from "firebase/auth";
import React from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import ActiveRoute from "../ActiveRoute/ActiveRoute";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSingout = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="mb-4">
      <Container>
        <ActiveRoute className="nav-link" to="/">
          Car Manager
        </ActiveRoute>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown title="Dash Board" id="collasible-nav-dropdown">
                <ActiveRoute className="nav-link bg-primary" to="/add">
                  Add Product
                </ActiveRoute>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
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
