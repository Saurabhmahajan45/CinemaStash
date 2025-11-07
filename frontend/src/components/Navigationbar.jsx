import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { getRole, removeRole } from "../services/RoleService";
import "../assets/css/Navigation.css";

export function Navigationbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(getRole());

  const handleLogout = () => {
    removeRole();
    setRole(null);
    navigate("/login");
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "role") setRole(e.newValue);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-4 py-3 border-bottom border-warning">
      <Container>
        <Navbar.Brand href="/" className="text-warning fw-bold">
          Cinema Stash
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">

            <LinkContainer to="/">
              <Nav.Link className="text-light">Home</Nav.Link>
            </LinkContainer>

            {/* Admin Links */}
            {role === "admin" && (
              <>
                <LinkContainer to="/admin/dashboard">
                  <Nav.Link className="text-light">Admin Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/add-movies">
                  <Nav.Link className="text-light">Add Movies</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/movies-list">
                  <Nav.Link className="text-light">Manage Movies</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin/bookings">
                  <Nav.Link className="text-light">All Bookings</Nav.Link>
                </LinkContainer>
              </>
            )}

            {/* User Links */}
            {role === "user" && (
              <>
                <LinkContainer to="/user/dashboard">
                  <Nav.Link className="text-light">User Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/movies">
                  <Nav.Link className="text-light">Movies</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/my-bookings">
                  <Nav.Link className="text-light">My Bookings</Nav.Link>
                </LinkContainer>
              </>
            )}

            {/* Guest (Not Logged In) */}
            {!role && (
              <>
                <LinkContainer to="/register">
                  <Nav.Link className="text-light">Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Button variant="outline-warning" className="ms-2">User Login</Button>
                </LinkContainer>
                <LinkContainer to="/admin-login">
                  <Button variant="outline-danger" className="ms-2">Admin Login</Button>
                </LinkContainer>
              </>
            )}

            {/*  Logout for logged-in users */}
            {role && (
              <Button variant="danger" className="ms-3" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
