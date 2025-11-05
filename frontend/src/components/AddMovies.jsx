import { useState } from "react";
import { Button, Card, Container, Form, ToastContainer } from "react-bootstrap";
import { Bounce, toast } from "react-toastify";

export function AddMovies() {
    const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    posterurl: "",
    releaseyear: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        console.log(formData);
        const response = await AddMovies(formData);
        console.log(response);
        if (response.status === 200) {
                // show success message
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
        if (error.response.status === 500) {
                // show failure message
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
        
    }

  }
//     try {
     
//     } catch (error) {
     
//   };
    return (
    <Container className="mt-5 pt-5" style={{ maxWidth: "600px "}} >
      <Card className="shadow border-0 rounded-4">
        <Card.Body>
          <h3 className="text-center mb-4 text-warning fw-bold">
            Add New Movie
          </h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Movies Name</Form.Label>
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

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="posterurl"
                placeholder="Enter image URL"
                value={formData.posterurl}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Release Year</Form.Label>
              <Form.Control
                type="number"
                name="releaseyear"
                placeholder="Enter release year"
                value={formData.releaseyear}
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
  );   
}