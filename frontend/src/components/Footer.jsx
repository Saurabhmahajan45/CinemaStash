import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-3 align-items-center">
          {/* Left: Logo / Brand */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold mb-0 text-white">
              Cinema<span className="highlight">Stash</span>
            </h5>
            <small className="text-secondary">Your Movie Discovery Platform</small>
          </Col>

          {/* Center: Navigation Links */}
          <Col md={4} className="text-center">
            <ul className="footer-links list-unstyled d-flex justify-content-center mb-0">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          {/* Right: Social Media Icons */}
          <Col md={4} className="text-center text-md-end">
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
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
