import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { deleteMovies, getAllMovies } from "../services/MovieServices";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function MoviesList() {

    const [movies, setMovies] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedMovies, setSelectedMovies] = useState(null);

    const navigate = useNavigate();

    const fetchMovies = async () => {
        try {
            const response = await getAllMovies();
            console.log(response.data);
            setMovies(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    const hideConfirmation = () => {
        setShowConfirmation(false);
    }


    const showSuccessToast = () => {
        toast.success("Movie deleted", {
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

    const showErrorToast = () => {
        toast.error("Movie deletion failed", {
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

    const handleMoviesDelete = async () => {
        try {
            if (selectedMovies) {
                const response = await deleteMovies(selectedMovies.movie_id);
                if (response.status === 200) {
                    showSuccessToast();
                    const remainingMovies = movies.filter((p) => {
                        return p.movie_id !== selectedMovies.movie_id
                    });
                    setMovies(remainingMovies);
                }
            }
        } catch (error) {
            console.log(error);
            if (error.response.status === 500) {
                showErrorToast();
            }
        }
        finally {
            setShowConfirmation(false);
        }
    }

    return (
        <Container className="mt-3" style={{ padding: "80px 0" }}>
            <Row>
                <Col lg={8}>
                    <h2 className="text-warning">Movies List</h2>
                </Col>
            </Row>
            {
                movies.length === 0 ? <Alert variant="primary">No movie found</Alert> :
                    <Table striped bordered hover className="mt-3 align-middle text-center">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Description</th>
                                <th>Release Year</th>
                                <th>Poster</th>
                                <th className="action-column">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie, index) => (
                                <tr key={movie.movie_id}>
                                    <td>{index + 1}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.description}</td>
                                    <td>{movie.release_year}</td>
                                    <td>{movie.poster_url}</td>
                                    <td className="action-column">
                                        <div className="d-flex justify-content-center gap-2">
                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() => {
                                                    setShowConfirmation(true);
                                                    setSelectedMovies(movie);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                onClick={() => {
                                                    navigate(`/edit-movies/${movie.movie_id}`);
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>


            }
            <Modal show={showConfirmation} onHide={hideConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure, you want to delete the {selectedMovies ? selectedMovies.name : ''} ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={hideConfirmation}>
                        No
                    </Button>
                    <Button variant="success" onClick={handleMoviesDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}