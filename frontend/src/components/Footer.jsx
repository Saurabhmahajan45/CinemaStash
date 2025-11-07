import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-3 align-items-center">
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold mb-0 text-white">
              Cinema<span className="highlight">Stash</span>
            </h5>
            <small className="text-secondary">Your Movie Discovery Platform</small>
          </Col>

          <Col md={4} className="text-center">
            <ul className="footer-links list-unstyled d-flex justify-content-center mb-0">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="my-3 text-light opacity-25" />
        <p className="text-center small text-light mb-0">
          © {new Date().getFullYear()} <b>Cinema Stash</b> | Developed by <b>Team 37</b>
        </p>
      </Container>
    </footer>
  );
}
