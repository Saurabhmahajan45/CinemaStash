import express from 'express';
import cors from 'cors';
import { connectDb } from './src/configs/Dbconfig.js';
import { registerAdmin } from './src/controllers/AdminController.js';
import { registerUser } from './src/controllers/UserController.js';
import { login } from './src/controllers/LoginController.js';
import { ROLES } from './src/constants/RoleConstants.js';
import { authorize, verifyToken } from './src/middlewares/VerifyToken.js';
import { addMovie, updateMovie, deleteMovie, getAllMovies, getMovieById, searchMovies, getMoviesByGenre, updateMovieRating } from './src/controllers/MovieController.js';
import { createBooking, getAllBookings, getBookingsByUser, updateBookingStatus } from './src/controllers/BookingController.js';
import { addReview, getReviewsByMovie, updateReview, deleteReview } from './src/controllers/ReviewController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/user", registerUser);

app.post("/admin", registerAdmin);
app.post("/login", login);

app.post("/movies", addMovie);
app.put("/movies/:id", updateMovie);
app.delete("/movies/:id", deleteMovie);

app.get("/movies", getAllMovies);
app.get("/movies/:id", getMovieById);
app.get("/movies/search", searchMovies);
app.get("/movies/genre/:genre", getMoviesByGenre);
app.patch("/movies/:id/rating", updateMovieRating);

app.post("/booking", createBooking);
app.get("/booking/user/:user_id", getBookingsByUser);
app.get("/booking", getAllBookings);
app.put("/booking/status/:booking_id", updateBookingStatus);

app.post("/reviews/add", addReview);
app.get("/reviews/movie/:movie_id", getReviewsByMovie);
app.put("/reviews/update", updateReview);
app.delete("/reviews/delete", deleteReview);


app.listen(6500,()=>{
    connectDb();
})