import React from 'react';

import "../Style/Header.css";

import { Navbar, Nav } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    width="249"
                    height="245"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home |</Nav.Link>
                <Nav.Link href="#features">Nutrition Tips |</Nav.Link>
                <Nav.Link href="#pricing">Add Recipe |</Nav.Link>
                <Nav.Link href="#pricing">Travel</Nav.Link>
            </Nav>
            <Form inline className="form">
                <FormControl type="text" placeholder="Search Recipe" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar >
    );
};

export default Header;