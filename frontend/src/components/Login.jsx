import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Bounce, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { login } from "../services/LoginService.js";
import { getToken, storeToken } from "../services/TokenService.js";
import { storeRole } from "../services/RoleService.js";


export function Login() {
  const [formData, setFormData] = useState({ phone: "", password: "", role: "user" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Login clicked:", formData);
      const response = await login(formData);
      console.log(response);

      if (response.status === 200) {
        storeToken(response.data.token);
        storeRole(formData.role);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response && (error.response.status === 400 || error.response.status === 500)) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "login",
          transition: Bounce,
        });
      }
    }
  };

  return (
    <div className="login-page p-4 shadow-lg rounded-4 align-items-center justify-content-center">
      <Container className="p-0 h-100">
        <Row className="g-0 h-100 justify-content-center">
          <Col md={6} className="form-section d-flex align-items-center justify-content-center">
            <div className="form-box p-4 rounded-4 bg-white">
              <h2 className="mb-3 text-center fw-bold">Welcome Back!</h2>
              <p className="text-center text-muted mb-4">Login to continue</p>

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Select name="role" value={formData.role} onChange={handleChange}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </Form.Select>
                </Form.Group>

                <Button type="submit" className="w-100" variant="warning">
                  Login
                </Button>
              </Form>

              <p className="mt-3 text-center">
                Don’t have an account?{" "}
                <Link to="/register" className="text-decoration-none fw-semibold">Sign Up</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
