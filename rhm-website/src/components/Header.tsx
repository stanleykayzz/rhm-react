import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Row from 'react-bootstrap';
import PictureBanner from '../PictureBanner';


export default function Header(): JSX.Element {

  // const menuTitles = ['Accueil','Galerie','Chambre', 'Connexion'];
  // let titles = menuTitles.map((title) => {<Nav.Link>{ " "+title+" "}</Nav.Link>});

  // const [menuSelected, setMenuSelected] = useState("");
  return (
    <div className='Header'>
      {/* Header */}
      <Navbar bg="light" expand="lg">
        <Container className='col-md-3' >
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* {titles} */}
              <Nav.Link >
              <Link to={'/home'} >Accueil</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/gallery' >Galerie</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/room'} >Chambre</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/login'} >Connexion</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/contact'} >Contact</Link>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
      <PictureBanner/>
      <Outlet />
    </div>
  );
}

