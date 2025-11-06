import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getMovieById, updateMovie } from "../services/MovieServices";
import { Bounce, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import '../assets/css/updateMovie.css'

export default function UpdateMovies() {

    const { movie_id } = useParams();
    console.log("id from url", movie_id);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ title: '', genre: '', description: '', release_year: '', poster_url:'' });
    
    const fetchMovieById = async () => {
        try {
            const response = await getMovieById(movie_id);
            if (response.status === 200) {
                setFormData(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovieById();
    }, []);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(formData);
            const response = await updateMovie(movie_id, formData);
            console.log(response);
            if (response.status === 200) {
                // show success message
                navigate("/movies-list");
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

    return (
        <div className="update-movie-page">
  <div className="update-movie-card">
        <Container className="mt-4">

            <Row>
                <Col lg={12}>
                     <h3 className="text-center mb-4 text-warning fw-bold">
                            Update Movie Content
                    </h3>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg={12}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Movie Title" 
                                name="title" 
                                onChange={handleChange} 
                                value={formData.title}
                             />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>genre</Form.Label>
                            <Form.Control type="text" placeholder="Enter genre" name="genre" onChange={handleChange} value={formData.genre} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Movie Description" name="description" onChange={handleChange} value={formData.description} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Release Year</Form.Label>
                            <Form.Control type="number" placeholder="Enter Release Year" name="release_year" onChange={handleChange} value={formData.release_year} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Poster URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie Poster URL" name="poster_url" onChange={handleChange} value={formData.poster_url} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Update Movie
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
        </div>
    )
}