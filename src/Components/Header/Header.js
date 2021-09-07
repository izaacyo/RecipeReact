import React from 'react';
import "./Header.css"

import { Navbar, Nav } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';


const Header = () => {
    return (
        <Navbar bg="light" variant="light" className="Navbar">
            <Navbar.Brand href="#home" className="picture">
                <img
                    alt=""
                    width="247"
                    height="234"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home | </Nav.Link>
                <Nav.Link href="/recipe/all">All Recipes | </Nav.Link>
                <Nav.Link href="/recipe/add">Add Recipe </Nav.Link>
            </Nav>
            <Nav className="quote" >
                <p>Eat clean, be happy </p>

            </Nav>

        </Navbar >
    );
};

export default Header;