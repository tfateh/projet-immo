import React from 'react';
import {Nav,Container,Navbar,NavDropdown} from 'react-bootstrap';
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout"; 
import"./Headers.css";
import { logout } from '../../js/actions/authActions';
import { useDispatch } from "react-redux";
const UserNav = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Tunisia-Home Real Stat</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About Us</Nav.Link>
        <NavDropdown title="Location" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Appartement</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Maison & Villa</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Local Commercial & Bureau</NavDropdown.Item>
          <NavDropdown.Divider />
        
        </NavDropdown>
        <NavDropdown title="Vente" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Appartement</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Maison & Villa</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Local Commercial & Bureau</NavDropdown.Item>
          <NavDropdown.Divider />
          
        </NavDropdown>
        <div className="C-but">
        <Button onClick={() => dispatch(logout())} color="inherit">
            Logout
            <LogoutIcon />
          </Button>

          
          </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default UserNav