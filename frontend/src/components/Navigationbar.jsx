import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../services/TokenService";
import { removeRole } from "../services/RoleService";
import { getRole } from "../services/RoleService";
import { getToken } from "../services/TokenService"; 
import { ROLES } from "../constants/RoleConstant";
import "../assets/css/Navigation.css";

export default function Navigationbar() {
    const navigate = useNavigate();
    const role = getRole();
    const token = getToken(); 

    const handleLogout = () => {
        removeToken();
        removeRole();
        navigate("/");
    }

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

                        <LinkContainer to="/movies">
                                    <Nav.Link className="text-light">Movies</Nav.Link>
                        </LinkContainer>

                        {role === "user" && (
  <>
    <LinkContainer to="/movies">
      <Nav.Link className="text-light">Movies</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/my-bookings">
      <Nav.Link className="text-light">My Bookings</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/user/dashboard">
      <Nav.Link className="text-light">Dashboard</Nav.Link>
    </LinkContainer>
  </>
)}

                        {role === ROLES.ADMIN ? (
                            <>
                                <LinkContainer to="/add-movies">
                                    <Nav.Link className="text-light">Add Movies</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/movies-list">
                                    <Nav.Link>Movies List</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/admin/bookings">
                                    <Nav.Link>Admin Bookings</Nav.Link>
                                </LinkContainer>

                            </>
                        ) : (
                            <>
                                <LinkContainer to="/about-us">
                                    <Nav.Link className="text-light">About Us</Nav.Link>
                                </LinkContainer>

                                 <LinkContainer to="/contact">
                                    <Nav.Link className="text-light">Contact Us</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/register">
                                    <Nav.Link className="text-light">Register</Nav.Link>
                                </LinkContainer>
                            </>
                        )}

                       
                        {token ? (
                            <Button variant="danger" onClick={handleLogout}>Logout</Button>
                        ) : (
                            <LinkContainer to="/login">
                                <Button variant="outline-warning">Login</Button>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}