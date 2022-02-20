import React from 'react';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import '../css/components/navbar.css';
import Logo from '../images/ebytr.jpeg';
import { Link } from 'react-router-dom';

function NavbarTasks() {

  const localStorageUserData = JSON.parse(localStorage.getItem('userData'));
  console.log('>>>>>>>>>>>>> ~ localStorageUserData', localStorageUserData);
  let user= localStorageUserData.user.name;

  return (
    <Navbar bg="light" expand={false} className="navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-brand">
          <img src={Logo} alt="logo" className="logo" />
          <div className="title-page">Lista de Tarefas</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="username">{user}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to='/'>Sair</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarTasks;