import React, {useContext} from 'react';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import '../css/components/navbar.css';
import Logo from '../images/ebytr.jpeg';
import Context from '../context/Context';
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
const { userData } = useContext(Context);


function NavbarTasks() {

  // const exitPage = () => {
  //   // navigate('/tasks');
  // };

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
            <Offcanvas.Title id="offcanvasNavbarLabel">{userData.name}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href='#'>Sair</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarTasks;