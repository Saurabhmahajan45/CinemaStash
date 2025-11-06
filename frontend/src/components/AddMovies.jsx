import { useState } from "react";
import { Button, Card, Container, Form, ToastContainer } from "react-bootstrap";
import { Bounce, toast } from "react-toastify";
import { saveMovies } from "../services/MovieServices";
import "../assets/css/AddMovies.css";

export function AddMovies() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    release_year: "",
    poster_url: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await saveMovies(formData);
      console.log(response);

      if (response.status === 200) {
        toast.success("Movie Added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="add-movie-page">
      <Container className="d-flex justify-content-center">
        <Card className="add-movie-card border-0 rounded-4 shadow">
          <Card.Body>
            <h3 className="text-center mb-4 text-warning fw-bold">
              Add New Movie
            </h3>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter movie name"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Enter description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  name="genre"
                  placeholder="e.g., Action, Drama, Romance"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

               <Form.Group className="mb-4">
                <Form.Label>Release Year</Form.Label>
                <Form.Control
                  type="number"
                  name="release_year"
                  placeholder="Enter release year"
                  value={formData.release_year}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="poster_url"
                  placeholder="Enter image URL"
                  value={formData.poster_url}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="warning" type="submit" className="px-4 rounded-pill">
                  Add Movie
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}