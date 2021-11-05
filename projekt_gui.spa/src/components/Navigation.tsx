import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Panel from './Panel';

export const Navigation: any = () => {
    return (
        <Router>
        <div className='Navbar'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/panel"}>Panel</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Home />
                </Route>
                <Route path="/panel" element={<Panel/>}>
                    <Panel />
                </Route>
            </Routes>
        </div>
      </Router>
    )
}
export default Navigation;