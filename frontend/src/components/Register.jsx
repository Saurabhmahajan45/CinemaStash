import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Register.css";
import { RegisterService } from "../services/RegisterService";

export  function Register() {
  const [formData, setformdata] = useState({name:'',email:'',phone:'',password:''});
  const [confirmPassword, setConfirmPassword] = useState("");

  const ConfirmPasswordChange = (event) =>{
      setConfirmPassword(event.target.value);
  }
const handleChange = (event) =>{
  setformdata({ ...formData,[event.target.name]: event.target.value});
}

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(confirmPassword);
    
    console.log("Signup clicked:", formData);
    const response = RegisterService(formData);
    console.log("Response:", response.data); 
    
  };

  return (
    <div className="signup-page p-4 shadow-lg rounded-4 align-items-center justify-content-center">
      <Container className="p-0">
        <Row className="g-0 h-100 justify-content-center">
          
    
          <Col md={6} className="form-section d-flex align-items-center justify-content-center">
            <div className="form-box p-4 rounded-4 bg-white">
              <h2 className="mb-3 text-center fw-bold">Join Cinema Stash!</h2>
              <p className="text-center text-muted mb-4">Create your account to explore new movies</p>

              <Form onSubmit={handleSignup}>
                
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone number"
                    name="phone"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password (min 6 characters)"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter password"
                    name="ConfirmPassword"
                    onChange={ConfirmPasswordChange}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="w-100" variant="primary">
                  Sign Up
                </Button>
              </Form>

              <p className="mt-3 text-center">
                Already have an account?{" "}
               <Link to="/login" className="text-decoration-none fw-semibold">
                  Log In
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}