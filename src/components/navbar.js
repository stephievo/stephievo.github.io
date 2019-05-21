import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import '../App.scss';
import '../scss/main.scss';

import logo from '../assets/logo2.png';



class NavBar extends Component {
  render() {
    return(
      <div>
      <Navbar className="navbar" fixed="top" expand="sm" collapseOnSelect>
        <HashLink to="/#root">
          <Navbar.Brand href="/" className="navbar-brand--thick">
          <img src={logo} alt="logo" style={{maxWidth: 40, paddingTop: 0}} />
          </Navbar.Brand>
        </HashLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <HashLink to="/#cards">
              <Nav.Link href="/#cards">Portfolio</Nav.Link>
            </HashLink>
            <Link to="/about">
              <Nav.Link href="/about">About</Nav.Link>
            </Link>

          </Nav>
          <a href="https://drive.google.com/file/d/1uu4c8y6hpJwkSUf2ukTh-xdZbt48WlIu/view?usp=sharing" target="_blank">
          <Nav.Link href="https://drive.google.com/file/d/1uu4c8y6hpJwkSUf2ukTh-xdZbt48WlIu/view?usp=sharing" target="_blank" style={{ color: "#707070", float: 'right', paddingRight: 0}}>Résumé</Nav.Link>
          </a>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}

export default NavBar;
