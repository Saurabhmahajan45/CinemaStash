import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate , Link } from "react-router-dom";
import { login } from "../services/LoginService";
import { setRole, setUserId } from "../services/RoleService";
import { ROLES } from "../constants/RoleConstant";
import { storeToken } from "../services/TokenService";
// import '../assets/css/Login.css';

export function Login() {
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ ...formData, role: ROLES.USER });
      storeToken(res.data.token);
      setRole(ROLES.USER);
      setUserId(res.data.user_id);
      console.log(res.data);
      navigate("/user/dashboard");
    } catch (err) {
      alert("Invalid phone or password");
      console.error(err);
    }
  
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 login-page">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-4 text-warning">User Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleChange} required />
          </Form.Group>
          <Button variant="warning" className="w-100" type="submit">Login</Button>
          <p className="mt-3 text-center">
                Don't have an account?{" "}
               <Link to="/register" className="text-decoration-none fw-semibold">
                  Sign Up
                </Link>
              </p>
        </Form>
      </Card>
    </Container>
  );
}
