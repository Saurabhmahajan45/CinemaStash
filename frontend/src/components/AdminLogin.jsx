import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../services/LoginService";
import { setRole } from "../services/RoleService";
import { ROLES } from "../constants/RoleConstant";

export function AdminLogin() {
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ ...formData, role: ROLES.ADMIN });
      setRole(ROLES.ADMIN);
      navigate("/admin/dashboard");
    } catch (err) {
      alert("Invalid admin credentials");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-4 text-warning">Admin Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleChange} required />
          </Form.Group>
          <Button variant="danger" className="w-100" type="submit">Login as Admin</Button>
        </Form>
      </Card>
    </Container>
  );
}
