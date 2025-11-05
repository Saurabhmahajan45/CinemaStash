import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

export function Navigationbar() {
    return (
        <Navbar bg="black" variant="black" expand="lg" fixed="top" className="px-4 py-3 border-bottom border-warning">
            <Container>
                <Navbar.Brand href="/" className="text-warning fw-bold">Cinema Stash</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link className="text-light">Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/dashboard">
                            <Nav.Link className="text-light">Dashboard</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/add-movies">
                            <Nav.Link className="text-light">Add Movies</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/movies-list">
                            <Nav.Link className="text-light">Movies</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/about-us">
                            <Nav.Link className="text-light">About Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/register">
                            <Nav.Link className="text-light">Register</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <Button variant="outline-warning" size="sm" onClick={ontoggle}>Login</Button>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}